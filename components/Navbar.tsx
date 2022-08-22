import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="text-white">
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#resume">Resume</Link>
        <Link href="#contact">Contact</Link>
      </nav>
    </>
  );
}
