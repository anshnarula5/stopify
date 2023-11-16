"use client"
import { useState } from "react";
import Card from "./components/Card"
import Topbar from "./components/Topbar"
import SongPlayer from "./components/SongPlayer";

const Home = () => {
  const [selectedSong, setSelectedSong] = useState(null);
  const handleCardClick = (song: any) => {
    setSelectedSong(song);
  };
  return (
    <div className="main flex w-full px-5 py-3 flex-col">
      <div className="px-4 " >
        <Topbar />
        <div>
          <div className="py-3">
            <div className="flex items-end justify-between pb-4">
              <h2 className="text-3xl font-bold">
                Hello, Ansh
              </h2>
              <span className="secondaryText">See all</span>
            </div>
            <div className="flex gap-6">
              <Card onClick={handleCardClick} trackName="Today's Hot Hits" coverImg="https://i.scdn.co/image/ab67706c0000da84a78f555e92c7b9e75bfa1ed8" subtitle="The most played tracks right now" />
              <Card onClick={handleCardClick} trackName="Yellow" coverImg="https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Yellow_cover_art.JPG/220px-Yellow_cover_art.JPG" subtitle="Coldplay" />
              <Card onClick={handleCardClick} trackName="Come As You Are" coverImg="https://static.wikia.nocookie.net/nirvana/images/3/3f/Nevermind.jpg/revision/latest?cb=20101224055911" subtitle="Nirvana" />
              <Card onClick={handleCardClick} trackName="Riptide" coverImg="https://lastfm.freetls.fastly.net/i/u/ar0/8e9b587a6f577478e9e6480235811f7d.jpg" subtitle="Vance Joy" />
            </div>
          </div>
          <div className="py-3">
            <div className="flex items-end justify-between pb-4">
              <h2 className="text-3xl font-bold">
                New releases for you
              </h2>
              <span className="secondaryText">See all</span>
            </div>
            <div className="flex gap-6">
              <Card onClick={handleCardClick} trackName="Starboy" coverImg="https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png" subtitle="The Weekend, Daft Punk" />
              <Card onClick={handleCardClick} trackName="Walkerworld" coverImg="https://i.scdn.co/image/ab67616d0000b273df9a35baaa98675256b35177" subtitle="Alan Walker" />
              <Card onClick={handleCardClick} trackName="Freaks" coverImg="https://upload.wikimedia.org/wikipedia/en/a/a1/Freaks_Surf_Curse.jpg" subtitle="Surf Curse" />
              <Card onClick={handleCardClick} trackName="Kun Faya Kun" coverImg="https://c.saavncdn.com/408/Rockstar-Hindi-2011-20221212023139-500x500.jpg" subtitle="A.R. Rahman, Javed Ali" />
            </div>
          </div>
        </div>
      </div>
      {selectedSong && <SongPlayer song={selectedSong} />}
    </div>
  )
}

export default Home
