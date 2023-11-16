import React from "react";

interface NavbarItemProps {
  icon: React.ReactNode;
  text: string;
  expanded: boolean;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ icon, text, expanded }) => {
  return (
    <div
      className={`
        relative flex items-center p-2 my-1
        font-medium rounded-md cursor-pointer
        transition-all group hover:bg-black hover:text-white
        ${expanded ? "md:w-auto" : "w-full"}
      `}
    >
      {icon}
      <span className={`overflow-hidden  ${expanded ? "md:w-44 ml-3" : "w-0"}`}>
        {text}
      </span>
      {!expanded && (
        <div
          className={`
            absolute left-full rounded-md px-2 py-1 ml-6
           text-slate-200 text-sm bg-black
            invisible opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 z-10
          `}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default NavbarItem;
