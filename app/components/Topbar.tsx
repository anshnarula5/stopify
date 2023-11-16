import React from 'react';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import SearchBar from './Searchbar';

const Topbar = () => {
  return (
    <div className='hidden md:flex flex-col lg:flex-row h-fit w-full items-center justify-between gap-8 secondaryText py-4'>
      <div className='lg:flex justify-center hidden lg:justify-start'>
        <ArrowBackIosOutlinedIcon className='mx-2 hover:cursor-pointer hover:text-white' />
        <ArrowForwardIosOutlinedIcon className='mx-2 hover:cursor-pointer hover:text-white' />
      </div>
      <SearchBar />
      <div className='lg:flex justify-center hidden lg:justify-end'>
        <MoreHorizOutlinedIcon className='mx-1 hover:cursor-pointer hover:text-white' />
      </div>
    </div>
  );
};

export default Topbar;