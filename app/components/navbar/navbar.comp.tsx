"use client";
import Link from "next/link";

import { Oleo_Script } from "@next/font/google";
import { Luckiest_Guy } from "@next/font/google";

const oleoScript = Oleo_Script({
  weight: "700",
  subsets: ["latin"],
});

const luckietGuy = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <div className="container-fluid navbar">
      <div className="nav-link-container container-fluid">
        <Link className="nav-link" href="/">
          <p className={oleoScript.className}>Home</p>
        </Link>
        <Link className="nav-link" href="/aboutus">
          <p className={oleoScript.className}>About Us</p>
        </Link>
        <h1 className={luckietGuy.className}><span className='poke-header'>- POKE TO THE MOON -</span></h1>
        <Link className="nav-link" href="/menu">
          <p className={oleoScript.className}>Menu</p>
        </Link>
        <Link className="nav-link" href="/location">
          <p className={oleoScript.className}>Location</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
