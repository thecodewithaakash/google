import { Book, Map, More, MoreVertOutlined, Photo, PlayArrow, Search } from '@material-ui/icons';
import React from 'react';
import HeaderOption from './HeaderOption';


const HeaderOptions = () => {
  return (
    <div className='flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]'>
        {/* left  */}
        <div className='flex space-x-6'>
        <HeaderOption Icons={Search} title="All" selected/>
        <HeaderOption Icons={Photo} title="Images" selected/>
        <HeaderOption Icons={PlayArrow} title="Videos" selected/>
        <HeaderOption Icons={Book} title="News" selected/>
        <HeaderOption Icons={Map} title="Maps" selected/>
        <HeaderOption Icons={MoreVertOutlined} title="More" selected/>
        </div>

        {/* right */}
        <div className='flex space-x-4'>
            <p className='link'>Settings</p>
            <p className='link'>Tools</p>
        </div>
    </div>
  )
}

export default HeaderOptions