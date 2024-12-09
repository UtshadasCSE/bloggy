"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const currentPath = usePathname();
  const menuLinks = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Portfolio",
      path: "/portfolio",
    },
    {
      id: 3,
      name: "Blog",
      path: "/blog",
    },
    {
      id: 4,
      name: "About Us",
      path: "/about",
    },
    {
      id: 5,
      name: "Conatct",
      path: "/contact",
    },
    {
      id: 6,
      name: "Dashboard",
      path: "/dashboard",
    },
  ];
  return (
    <div className="backdrop-blur-sm bg-white/30 text-white flex justify-between items-center p-4 fixed w-full">
      <div>
        <h3 className="text-2xl font-bold">
          Blo<span className="text-[#D9EAFD]">gg</span>y
        </h3>
      </div>
      <div className="flex gap-6">
        {menuLinks.map((menu, index) => (
          <Link
            key={index}
            href={menu.path}
            className={`hover:border-b hover:text-lg duration-700 ${
              currentPath == menu.path && "border-b"
            } `}
          >
            {menu.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
