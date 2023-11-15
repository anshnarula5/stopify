import Image from 'next/image';
import React from 'react';

const Card = ({ trackName, subtitle, coverImg }: any) => {
  return (
    <div className="w-48 ">
      <div className="relative h-48 overflow-hidden rounded-md">
        <Image
          src={coverImg}
          alt="Album Cover"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="py-4 rounded-b-lg">
        <h2 className="text-lg font-semibold">{trackName}</h2>
        <p className="secondaryText">{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;
