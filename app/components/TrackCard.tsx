import Image from 'next/image';
import React from 'react';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';

const TrackCard = ({ trackName, subtitle, coverImg, onClick, artist, selectedSong }: any) => {
  const handleClick = () => {
    onClick({ trackName, subtitle, coverImg });
  };

  const isSelected = selectedSong?.trackName === trackName;

  return (
    <div className="w-full flex justify-between cursor-pointer items-center" onClick={handleClick}>
      <div className="flex gap-3 items-center">
        <div className="relative w-16 h-16">
          <Image src={coverImg} alt="Album Cover" objectFit="cover" layout="fill" />
          {isSelected && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
             <MusicNoteOutlinedIcon className="text-white text-xl animate-spin" />
            </div>
          )}
        </div>
        <div className={`${isSelected && 'active'}`}>
          <h2 className="font-medium">{trackName}</h2>
          <p className="text-sm secondaryText">{artist}</p>
        </div>
      </div>
      <span className="secondaryText text-sm">{subtitle}</span>
    </div>
  );
};

export default TrackCard;
