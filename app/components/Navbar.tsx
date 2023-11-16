"use client";
import { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import NavbarItem from "./NavbarItem";
import SearchIcon from '@mui/icons-material/Search';
import Image from "next/image";
const Navbar = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <>
    <aside className="min-h-screen navbar hidden md:flex">
      <nav className={`flex flex-col shadow-sm transition-all ${expanded ? 'w-64' : 'w-20'}`}>
        <div className="px-4 py-6 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/245.svg"
            className={`overflow-hidden transition-all mx-1 w-16 ${expanded ? "opacity-100" : "opacity-0 hidden"}`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="hover:bg-black hover:text-white mx-3"
          >
            {expanded ? <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />}
          </button>
        </div>

      <div className="flex-1 px-6 pt-5 flex flex-col">
          {expanded && <span className="text-sm py-1">Features</span>}
          <NavbarItem icon={<HomeIcon />} text="Home" expanded={expanded} />
          <NavbarItem icon={<ExploreOutlinedIcon />} text="Discover" expanded={expanded} />
          <NavbarItem icon={<LibraryMusicOutlinedIcon />} text="Collections" expanded={expanded} />

          {expanded && <span className="text-sm mt-6">Library</span>}
          <NavbarItem icon={<CloudDownloadOutlinedIcon />} text="Download" expanded={expanded} />
          <NavbarItem icon={<FavoriteBorderOutlinedIcon />} text="Favourites" expanded={expanded} />
          <NavbarItem icon={<FolderOutlinedIcon />} text="Files" expanded={expanded} />
        </div>
      </nav>
    </aside>
      <nav className="fixed bottom-0 left-0 right-0 flex md:hidden navbar z-50 p-3 justify-between items-center">
        <HomeIcon className="text-white" fontSize="large" />
        <SearchIcon className="text-white" fontSize="large" />
        <ExploreOutlinedIcon className="text-white" fontSize="large" />
        <div className="relative w-10 h-10 ">
            <Image
              src={"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"}
              alt="Album Cover"
              objectFit="cover"
              className="rounded-full"
              layout="fill"
            />
          </div>

      </nav>
    </>
  );
}

export default Navbar;



