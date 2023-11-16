import Image from 'next/image';
import React from 'react';
import poster from '../../public/poster.png';

const Poster = () => {
  return (
    <div className='md:w-full poster md:p-8 p-4 flex flex-col md:flex-row md:items-center justify-between rounded-2xl 
        md:gap-8 gap-2 md:my-6 cursor-pointer m-3'>
      <div className='flex flex-col md:gap-4 gap-2 md:w-2/3 lg:w-1/2'>
        <p>New Album</p>
        <h3 className='md:text-5xl text-2xl font-extrabold'>
          Aye Meri Zohrajabeen
        </h3>
        <p className='md:text-2xl text-lg text-black font-bold'>Dhum Dhadaka Orchestra</p>
        <div className="lg:p-3 p-2 w-fit bg-blue-700 rounded-lg font-bold"> Listen Now</div>
      </div>
      <div className="hidden md:flex relative h-60 md:w-1/3 lg:w-1/2">
        <Image
          src={poster}
          alt="Poster"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Poster;
