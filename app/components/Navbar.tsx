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

const Navbar = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen navbar">
      <nav className="h-full flex flex-col border-r shadow-sm ">
        <div className="px-4 py-6 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/245.svg"
            className={`overflow-hidden transition-all mx-1 ${expanded ? "w-16" : "w-0"}`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
          >
            {expanded ? <KeyboardDoubleArrowLeftIcon />: <KeyboardDoubleArrowRightIcon />}
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
          <NavbarItem icon={<FolderOutlinedIcon />} text="Local Files" expanded={expanded} />
        </div>
      </nav>
    </aside>
  );
}

export default Navbar