import React from 'react'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import SearchBar from './Searchbar';
const Topbar = () => {
  return (
    <div className='flex h-fit w-full items-center justify-between gap-8  py-4'>
      <div className=''>
        <ArrowBackIosOutlinedIcon className='mx-2 hover:cursor-pointer' />
        <ArrowForwardIosOutlinedIcon className='mx-2 hover:cursor-pointer' />
      </div>
      <SearchBar />
      <div>
        <MoreHorizOutlinedIcon className='mx-1 hover:cursor-pointer' />
      </div>
    </div>
  )
}

export default Topbar