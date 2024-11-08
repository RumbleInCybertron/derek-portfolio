import Link from "next/link";

import React from "react";
import Image from "next/image";
import { routes } from "@/app/data/global"
import "@/app/styles/globals.css"

interface AppbarProps {
  currentPage: string;
}

function Appbar({ currentPage }: AppbarProps) {
  return (
    <nav className="max-w-screen-lg mx-auto flex items-center justify-between">
      <li className="list-none font-bold text-lg cursor-pointer">
        <Link href="/">
          <span className="font-black text-xl flex items-center">
            <Image
              className="mr-2 transform hover:rotate-360 hover:scale-75 transition-transform duration-500"
              src="/static/logos/dh-logo-circle.png"
              alt=""
              width="60"
              height="60"
            />
            {"Derek-Haus".split("").map((letter, index) => {
              return (
                <span key={index} className="hover:text-fun-pink hover:mt-2 transition-all duration-500 hover:duration-100">
                  {letter}
                </span>
              );
            })}
          </span>
        </Link>
      </li>
      <ul className="flex items-center space-x-10">
        {routes.map((item, index) => {
          return (
            <li
              key={index}
              className={`list-none text-white ${currentPage === item.title
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-100 transition-opacity"
                }`}
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  );
};

export default Appbar;
