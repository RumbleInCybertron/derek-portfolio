"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { routes } from "@/app/data/global";
import Image from "next/image";

function MenuIcon(props: any) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CrossIcon(props: any) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}


export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <nav>
      <div
        className="flex items-center justify-between w-full p-5"
        style={{ zIndex: 1738 }}
      >
        <li className="list-none font-bold text-lg">
          <Link href="/">
            <Image
              className="mr-3"
              src="/static/logos/dh-logo-circle.png"
              alt=""
              width="50"
              height="50"
            />
          </Link>
        </li>
        <button
          className="burger visible md:hidden"
          aria-label="Toggle menu"
          type="button"
          onClick={toggleMenu}
        >
          <MenuIcon data-hide={isMenuOpen} />
          <CrossIcon data-hide={!isMenuOpen} />
        </button>
      </div>
      {isMenuOpen && (
        <ul className="menu flex flex-col absolute bg-bg menuRendered">
          {routes.map((item, index) => {
            return (
              <li
                key={index}
                className="border-b border-gray-600 text-gray-100 text-sm font-semibold"
                style={{ transitionDelay: `${150 + index * 25}ms` }}
              >
                <Link href={item.path} className="flex w-auto pb-4">
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}