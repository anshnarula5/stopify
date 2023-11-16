import Image from 'next/image'
import React from 'react'

const TrackCard = ({ trackName, subtitle, coverImg, onClick, artist }: any) => {
  const handleClick = () => {
    onClick({ trackName, subtitle, coverImg });
  };
  return (
    <div className="w-full flex justify-between cursor-pointer items-center" onClick={handleClick}>
      <div className="flex gap-3 items-center">
        <Image
          src={coverImg}
          alt="Album Cover"
          objectFit="cover"
          width={60}
          height={32}
        />
        <div>
          <h2 className=" font-medium">{trackName}</h2>
          <p className="secondaryText text-sm">{artist}</p>
        </div>
      </div>
      <span className='secondaryText text-sm'>
      {subtitle}
      </span>
    </div>
  )
}

export default TrackCard