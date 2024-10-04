import React from 'react';
import axios from 'axios';
import { parseVideoDuration } from './parseVideoDuration';
import { convertRawtoString } from './convertRawToString';
import { timeSince } from './timeSince';

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

export const parseData = async (items) => {
  try {
    const videoIDs = [];
    const channelIDs = [];

    items.forEach((item) => {
      channelIDs.push(item.snippet.channelId);
      videoIDs.push(item.id.videoId);
    });

    // Corrected API request for channel details
    const { data: { items: channelsData } } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&id=${channelIDs.join(",")}&key=${API_KEY}`
    );

    const parsedChannelsData = [];
    channelsData.forEach((channel) =>
      parsedChannelsData.push({
        id: channel.id,
        image: channel.snippet.thumbnails.default.url,
      })
    );

    // Corrected API request for videos
    const { data: { items: videosData } } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoIDs.join(",")}&key=${API_KEY}`
    );

    const parsedData = [];
    items.forEach((item, index) => {
      const { image: channelImage } = parsedChannelsData.find(
        (data) => data.id === item.snippet.channelId
      );

      if (channelImage) {
        parsedData.push({
          videoId: item.id.videoId, // Corrected
          videoTitle: item.snippet.title,
          videoDescription: item.snippet.description, // Corrected typo
          videoThumbnail: item.snippet.thumbnails.medium.url,
          videoLink: `https://www.youtube.com/watch?v=${item.id.videoId}`, // Corrected URL
          videoDuration: parseVideoDuration(
            videosData[index].contentDetails.duration
          ),
          videoViews: convertRawtoString(videosData[index].statistics.viewCount),
          videoAge: timeSince(new Date(item.snippet.publishedAt)),
          channelInfo: {
            id: item.snippet.channelId,
            image: channelImage,
            name: item.snippet.channelTitle,
          },
        });
      }
    });

    return parsedData; // Return the final parsed data
  } catch (err) {
    console.error('Error fetching YouTube data:', err);
  }
};
