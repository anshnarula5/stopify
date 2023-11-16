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
    <div className="fixed bottom-0 left-0 right-0 p-6 audioPlayer flex justify-between items-center border-t-2 border-stone-800">
      <div className='grow-0'>
        <div className='flex justify-between items-center'>
          <div>
            <h4 className='font-bold'>
            {song.trackName}
            </h4>
            <span className='secondaryText text-sm'>{song.subtitle}</span>
          </div>
          <div className='pl-8'>
            <FavoriteBorderOutlinedIcon className='mx-1 icon' />
            <AddCircleOutlineOutlinedIcon className='mx-2 icon'/>
          </div>
        </div>
      </div>
      <div className='flex-1  flex flex-col items-center justify-center gap-4 px-16'>
        <div className='flex gap-9 justify-center items-center'>
          <ShuffleOutlinedIcon className='icon' />
          <SkipPreviousOutlinedIcon  fontSize='large'className='icon' />
          <PauseCircleOutlineIcon fontSize='large' className='icon' />
          <SkipNextOutlinedIcon  fontSize='large'className='icon' />
          <LoopOutlinedIcon  className='icon' />
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          className="h-1 w-[50rem] bg-gray-300 rounded-full"
        />
      </div>
      <div className='flex items-center gap-4'>
        <VolumeUpOutlinedIcon className='icon' />
        <input
          type="range"
          min="0"
          max="100"
          className="h-1 w-24 bg-gray-300 rounded-full"
        />
        <MicNoneOutlinedIcon className='icon' />
        <DevicesOutlinedIcon className='icon' />
        <ShareOutlinedIcon className='icon' />
      </div>
    </div>
  )
}

export default SongPlayer