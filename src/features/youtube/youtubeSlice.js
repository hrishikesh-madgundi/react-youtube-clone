import { createSlice } from "@reduxjs/toolkit";
import { getHomePageVideos } from "../../store/reducers/getHomePageVideos";

const initialState = {
    videos: [],
    currentPlaying: null,
    searchTerm:"",
    searchResults:"",
    nextPageToken: null,
    recommendedVideos: []
};

const youtubeSlice = createSlice({
    name:"youtubeApp",
    initialState,
    reducers:{
        
    },
    extraReducers: (builder) => {
        builder.addCase(getHomePageVideos.fulfilled, (state,action)=>{
            if(action.payload && action.payload.parseData){
                state.videos = action.payload.parseData;
                state.nextPageToken = action.payload.nextPageToken;
            }
        })
    }
})

export default youtubeSlice.reducer;