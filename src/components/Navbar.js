import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { TbVideoPlus } from "react-icons/tb";
import { BsBell } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className='flex justify-between px-14 h-14 items-center bg-[#212121] opacity-95 sticky text-white'>
      <div className='flex gap-8 items-center text-2xl '>
        <div >
            <GiHamburgerMenu />
        </div>
        <div className='flex gap-1 items-center justify-center'>
            <img src='https://static.vecteezy.com/system/resources/previews/018/930/572/original/youtube-logo-youtube-icon-transparent-free-png.png' alt='youtube-icon' className='text-3xl h-14 w-14'></img>
            <span className='text-2xl'>YouTube</span>
        </div>
        </div>
        <div className='flex items-center justify-center gap-5'>
            <form>
                <div className='flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-3xl'>
                    <div className='flex gap-5 items-center pr-5'>
                        <input type='text' placeholder='Search' className='w-96 bg-zinc-900 focus:outline-none border-none'/>
                       
                    </div>
                        <button className='h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-3xl'>
                            <AiOutlineSearch className='text-xl rounded-r-3xl'/>
                        </button>
                </div>
            </form>
           
            <div className='text-xl p-3 bg-zinc-900 rounded-full'>
            <FaMicrophone />
            </div>
            </div>
            <div className='flex gap-8 items-center text-xl'>
            <TbVideoPlus />
            <div className='relative'>
            <BsBell />
            <span className='absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1'>9+</span>
            </div>
            <img src='https://media.licdn.com/dms/image/v2/D4D03AQGnmEnlGNvt3w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1692136924292?e=1731542400&v=beta&t=2B5_GWB0ffq50-DZitYZaZKujIZnndWn93FADZn2fUk' alt='profile-log' className='w-9 h-9 rounded-full'/>
            </div>
        </div>
  )
}

export default Navbar
