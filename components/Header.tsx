import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="bg-secondary uppercase fixed top-0 right-0 left-0 z-10 transition-all header">
      <div className="container flex">
        <div className="flex items-center">
          <Link href="/">
            <a className="p-3">
              <Logo />
            </a>
          </Link>
          <Link className="text-lg px-4" href="tel:07754964133">
            07754 964 133
          </Link>
        </div>

        <Navbar />
      </div>
    </header>
  );
}
