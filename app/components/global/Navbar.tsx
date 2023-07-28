'use client';

import { FiSun, FiMoon } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import useDarkMode from "@/utils/hooks/useDarkMode";

const Appbar = ({ currentPage }) => {

  const [colorTheme, setTheme] = useDarkMode();

  return (
    <>
      <nav>
        <li>
          <Link href="/">
            <span>
              <Image
                className="mr-2 transform hover:rotate-360 hover:scale-75 transition-transform duration-500"
                src="/static/logos/KitsuneCom.jpg"
                alt=""
                width="60"
                height="60"
              />
              {"D-Roc".split("").map((letter, index) => {
                return(
                  <span key={index}></span>
                );
              })}
            </span>
          </Link>
        </li>
        {/* <header className="flex justify-between container items-center py-2 px-4 shadow-sm">
          <div className="flex space-x-5">
            <Link href="/">
              <span className="text-lg font-bold">Logo</span>
            </Link>
            <Link href="/">
              <span className="text-gray-500 hover:text-gray-900">Home</span>
            </Link>
            <Link href={"/"}>
              <span className="text-gray-500 hover:text-gray-900">Home</span>
            </Link>
            <Link href="/">
              <span className="text-gray-500 hover:text-gray-900">Home</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {colorTheme === "light" ? (
              <button
                type="button"
                aria-label="Toggle dark mode"
                onClick={() => setTheme("light")}
              >
                {<FiSun />}
              </button>
            ) : (
              <button
                type="button"
                aria-label="Toggle dark mode"
                onClick={() => setTheme("dark")}
              >
                {<FiMoon />}
              </button>

            )}

            <div className="m-2">
              <Link href="/">
                <span className="m-1 bg-purple-600 hover:bg-green-600 text-white px-4 py-2 rounded-full">
                  <a>Home</a>
                </span>
              </Link>
              <Link href="/">
                <span className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full">
                  <a>Home</a>
                </span>
              </Link>
            </div>
          </div>
        </header> */}
      </nav >
    </>


  );
};

export default Appbar;
