"use client"
import { useState } from "react";
import Card from "./components/CoverCard"
import Topbar from "./components/Topbar"
import SongPlayer from "./components/SongPlayer";
import TrackCard from "./components/TrackCard";
import Image from "next/image";
import Profile from "./components/Profile";

const Home = () => {
  const [selectedSong, setSelectedSong] = useState(null);
  const handleCardClick = (song: any) => {
    setSelectedSong(song);
  };
  return (
    <div className="main flex w-full lg:flex-row flex-col">
      <div className="flex p-1 lg:px-6 lg:pt-3 pb-24 flex-col w-full lg:w-3/4">
        <div className="" >
          <Topbar />
          <div>
            <div className="p-3">
              <div className="flex items-end justify-between pb-4">
                <h2 className="text-3xl font-bold">
                  Hello, Ansh
                </h2>
                <span className=" icon">See all</span>
              </div>
              <div className="flex gap-8 flex-wrap">
                <Card selectedSong = {selectedSong} onClick={handleCardClick} trackName="Today's Hot Hits" coverImg="https://i.scdn.co/image/ab67706c0000da84a78f555e92c7b9e75bfa1ed8" subtitle="The most played tracks right now" />
                <Card selectedSong = {selectedSong} onClick={handleCardClick} trackName="Yellow" coverImg="https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Yellow_cover_art.JPG/220px-Yellow_cover_art.JPG" subtitle="Coldplay" />
                <Card selectedSong = {selectedSong} onClick={handleCardClick} trackName="Come As You Are" coverImg="https://static.wikia.nocookie.net/nirvana/images/3/3f/Nevermind.jpg/revision/latest?cb=20101224055911" subtitle="Nirvana" />
                <Card selectedSong = {selectedSong} onClick={handleCardClick} trackName="Riptide" coverImg="https://lastfm.freetls.fastly.net/i/u/ar0/8e9b587a6f577478e9e6480235811f7d.jpg" subtitle="Vance Joy" />
              </div>
            </div>
            <div className="p-3">
              <div className="flex items-end justify-between pb-4">
                <h2 className="text-3xl font-bold">
                  New releases for you
                </h2>
                <span className=" icon">See all</span>
              </div>
              <div className="flex gap-8  flex-wrap">
                <Card selectedSong = {selectedSong} onClick={handleCardClick} trackName="Starboy" coverImg="https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png" subtitle="The Weekend, Daft Punk" />
                <Card selectedSong = {selectedSong} onClick={handleCardClick} trackName="Walkerworld" coverImg="https://i.scdn.co/image/ab67616d0000b273df9a35baaa98675256b35177" subtitle="Alan Walker" />
                <Card selectedSong = {selectedSong} onClick={handleCardClick} trackName="Freaks" coverImg="https://upload.wikimedia.org/wikipedia/en/a/a1/Freaks_Surf_Curse.jpg" subtitle="Surf Curse" />
                <Card selectedSong = {selectedSong} onClick={handleCardClick} trackName="Kun Faya Kun" coverImg="https://c.saavncdn.com/408/Rockstar-Hindi-2011-20221212023139-500x500.jpg" subtitle="A.R. Rahman, Javed Ali" />
              </div>
            </div>
          </div>
        </div>
        {selectedSong && <SongPlayer song={selectedSong} />}
      </div>
      <Profile handleCardClick = {handleCardClick}  selectedSong = {selectedSong} />
    </div>
  )
}

export default Home
