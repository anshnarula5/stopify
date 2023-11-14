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
        flex items-center py-2 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${expanded ? "md:w-auto" : "w-full"}
      `}
    >
      {icon}
      <span className={`overflow-hidden transition-all ${expanded ? "md:w-36 ml-3" : "w-0"}`}>
        {text}
      </span>
      {!expanded && (
        <div
          className={`
            absolute left-full rounded-md px-2 py-1 ml-6
            bg-indigo-100 text-indigo-800 text-sm
            invisible opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
        `}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default NavbarItem;
