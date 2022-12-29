import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="text-white flex self-stretch w-auto ml-auto">
        <ul className="flex relative w-full">
          <li className="flex">
            <Link href="#about">
              <a className="p-10">About</a>
            </Link>
          </li>
          <li className="flex">
            <Link href="#skills">
              <a className="p-10">Skills</a>
            </Link>
          </li>
          <li className="flex">
            <Link href="#resume">
              <a className="p-10">Resume</a>
            </Link>
          </li>
          <li className="flex">
            <Link href="#contact">
              <a className="p-10">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
