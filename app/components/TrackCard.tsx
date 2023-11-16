import Image from 'next/image'
import React from 'react'

const TrackCard = ({ trackName, subtitle, coverImg, onClick }: any) => {
  const handleClick = () => {
    onClick({ trackName, subtitle, coverImg });
  };
  return (
    <div className="w-full bg-zinc-600 flex justify-between cursor-pointer items-center" onClick={handleClick}>
      <div className="flex gap-3 items-center">
        <Image
          src={coverImg}
          alt="Album Cover"
          objectFit="cover"
          width={60}
          height={32}
        />
        <div>
          <h2 className="text-lg font-semibold">{trackName}</h2>
          <p className="secondaryText">{subtitle}</p>
        </div>
      </div>
      <span className='secondaryText'>
        4 min ago
      </span>
    </div>
  )
}

export default TrackCard