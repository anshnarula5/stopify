import Image from 'next/image';
import React from 'react';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
const CoverCard = ({ trackName, subtitle, coverImg, onClick, selectedSong }: any) => {
  const handleClick = () => {
    if (onClick) {
      onClick({ trackName, subtitle, coverImg });
    }
  };
  const isSelected = selectedSong?.trackName === trackName;
  return (
    <div className={`w-52 backdrop-blur-lg  rounded-lg `}
      onClick={handleClick}>
      <div className="relative shadow-md hover:shadow-lg hover:shadow-black shadow-black
       h-48 overflow-hidden rounded-md cursor-pointer hover:scale-105 transition
      duration-300 ease-in-out">
        <Image
          src={coverImg}
          alt="Album Cover"
          layout="fill"
          objectFit="cover"
        />
         {isSelected && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-md">
            <MusicNoteOutlinedIcon className="text-white text-4xl animate-spin" />
          </div>
        )}
      </div>
      <div className={`py-4 rounded-b-lg ${isSelected && 'active'}`}>
        <h2 className="text-lg font-semibold">{trackName}</h2>
        <p className="secondaryText">{subtitle}</p>
      </div>
    </div>
  );
};

export default CoverCard;
