import Image from 'next/image'
import React from 'react'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import TrackCard from './TrackCard';
const Profile = ({handleCardClick, selectedSong} : any) => {
  return (
    <div className="w-full py-6 px-8 profile ">
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center justify-between gap-4">
          <div className="relative w-14 h-14">
            <Image
              src={"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"}
              alt="Album Cover"
              objectFit="cover"
              className="rounded-full"
              layout="fill"
            />
          </div>
          <h3 className="text-lg font-bold">
            Ansh Narula
          </h3>
        </div>
        <div>
          <NotificationsNoneOutlinedIcon className='icon mx-2' fontSize='medium' />
          <KeyboardArrowDownOutlinedIcon className='icon' fontSize='large' />
        </div>
      </div>
      <div className='py-6'>
        <div className="flex items-end justify-between ">
          <h2 className="text-xl font-bold">
            Recently Played
          </h2>
          <span className="icon">See all</span>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
      <TrackCard selectedSong = {selectedSong} onClick={handleCardClick} trackName="Blinding Lights" coverImg="https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png" artist="The Weekend" subtitle = "4 min ago" />
      <TrackCard selectedSong = {selectedSong} onClick={handleCardClick} trackName="Believer" coverImg="https://upload.wikimedia.org/wikipedia/en/5/5c/Imagine-Dragons-Believer-art.jpg"  artist="Imagine Dragons" subtitle="10 mins ago" />
      <TrackCard selectedSong = {selectedSong} onClick={handleCardClick} trackName="Heat Waves" coverImg="https://upload.wikimedia.org/wikipedia/en/b/b0/Glass_Animals_-_Heat_Waves.png" artist = "Glass Animals" subtitle="1 hour ago" />
      <TrackCard selectedSong = {selectedSong} onClick={handleCardClick} trackName="Perfect" coverImg="https://i1.sndcdn.com/artworks-000220516310-6i3ate-t500x500.jpg" artist = "ed Sheeran" subtitle="2 hour ago" />
      </div>
      <div className='py-6'>
        <div className="flex items-end justify-between ">
          <h2 className="text-xl font-bold">
           My Playlist
          </h2>
          <span className="icon">See all</span>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
      <TrackCard selectedSong = {selectedSong} onClick={handleCardClick} trackName="Land of rising sun" coverImg="https://lastfm.freetls.fastly.net/i/u/ar0/7def09fa362a4410703fa8d58a093af2.jpg" artist = "12 songs" subtitle="1hr 2min" />
      <TrackCard selectedSong = {selectedSong} onClick={handleCardClick} trackName="burning memories" coverImg="https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Saint_Jhn_-_Roses_%28Imanbek_Remix%29.png/220px-Saint_Jhn_-_Roses_%28Imanbek_Remix%29.png" artist = "27 songs" subtitle="2hr 32min" />

</div>
    </div>
  )
}

export default Profile