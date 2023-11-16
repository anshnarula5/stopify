import React, { useEffect, useState } from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Image from 'next/image';

const SongPlayer = ({ song }: any) => {
  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {
    setSliderValue(0);
    const interval = setInterval(() => {
      setSliderValue((prevValue) => {
        const maxValue = 100;
        return prevValue === maxValue ? 0 : prevValue + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [song]);

  return (
    <>
      {/* Web view */}
      <div className="fixed bottom-0 left-0 right-0 p-3 audioPlayer lg:flex justify-between items-center border-t-2 border-neutral-800 hidden">
        <div className='md:w-1/5'>
          <div className='flex justify-between items-center w-full '>
            <div className="flex items-center gap-1">
              <div className="relative w-12 h-12 ">
                <Image src={song.coverImg} alt="Album Cover" objectFit="cover" layout="fill" />
              </div>
              <div className='p-2'>
                <h4 className='font-bold'>
                  {song.trackName}
                </h4>
                <span className='secondaryText text-sm'>{song.subtitle}</span>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <AddCircleOutlineOutlinedIcon className='icon' fontSize='large' />
              <PauseCircleOutlineIcon fontSize='large' className='icon' />
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center flex-1 md:w-3/5 justify-between'>
          <div className='flex justify-center items-center gap-9 mt-4 md:mt-0'>
            <ShuffleOutlinedIcon className='icon' />
            <SkipPreviousOutlinedIcon fontSize='large' className='icon' />
            <PauseCircleOutlineIcon fontSize='large' className='icon' />
            <SkipNextOutlinedIcon fontSize='large' className='icon' />
            <LoopOutlinedIcon className='icon' />
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            className="h-1 xl:w-[50rem] lg:w-[40rem] w-full bg-gray-300 rounded-full slider mt-3 "
          />
        </div>
        <div className='md:w-1/5 flex items-center gap-2 mt-4 md:mt-0'>
          <VolumeUpOutlinedIcon className='icon' />
          <input
            type="range"
            min="0"
            max="100"
            value={50}
            onChange={() => {}}
            className="h-1  bg-gray-300 rounded-full mx-2"
          />
          <MicNoneOutlinedIcon className='icon' />
          <DevicesOutlinedIcon className='icon' />
          <ShareOutlinedIcon className='icon' />
        </div>
      </div>
      {/* Mobile view */}
      <div className='fixed left-0 right-0 px-3 pt-1  flex flex-col justify-between items-center lg:hidden mx-2 
       rounded-xl bg-black bg-opacity-80 z-50' style={{ bottom: "4.1rem" }}>
        <div className='flex justify-between items-center w-full '>
          <div className="flex items-center gap-1">
            <div className="relative w-12 h-12 ">
              <Image src={song.coverImg} alt="Album Cover" objectFit="cover" layout="fill" />
            </div>
            <div className='p-2'>
              <h4 className='font-bold'>
                {song.trackName}
              </h4>
              <span className='secondaryText text-sm'>{song.subtitle}</span>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <AddCircleOutlineOutlinedIcon className='icon' fontSize='large' />
            <PauseCircleOutlineIcon fontSize='large' className='icon' />
          </div>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          className="h-1 w-full bg-gray-300 rounded-full slider "
        />
      </div>
    </>
  )
}

export default SongPlayer