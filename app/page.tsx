import Card from "./components/Card"
import Topbar from "./components/Topbar"

const Home = () => {
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
              <Card trackName="Today's Hot Hits" coverImg="https://i.scdn.co/image/ab67706c0000da84a78f555e92c7b9e75bfa1ed8" subtitle="The most played tracks right now" />
              <Card trackName="Yellow" coverImg="https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Yellow_cover_art.JPG/220px-Yellow_cover_art.JPG" subtitle="Coldplay" />
              <Card trackName="Come As You Are" coverImg="https://static.wikia.nocookie.net/nirvana/images/3/3f/Nevermind.jpg/revision/latest?cb=20101224055911" subtitle="Nirvana" />
              <Card trackName="Riptide" coverImg="https://lastfm.freetls.fastly.net/i/u/ar0/8e9b587a6f577478e9e6480235811f7d.jpg" subtitle="Vance Joy" />
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
              <Card trackName="Starboy" coverImg="https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png" subtitle="The Weekend, Daft Punk" />
              <Card trackName="Walkerworld" coverImg="https://i.scdn.co/image/ab67616d0000b273df9a35baaa98675256b35177" subtitle="Alan Walker" />
              <Card trackName="Freaks" coverImg="https://upload.wikimedia.org/wikipedia/en/a/a1/Freaks_Surf_Curse.jpg" subtitle="Surf Curse" />
              <Card trackName="Kun Faya Kun" coverImg="https://c.saavncdn.com/408/Rockstar-Hindi-2011-20221212023139-500x500.jpg" subtitle="A.R. Rahman, Javed Ali, Mohit Chauhan" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
