"use:client";

import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";

export function Navbar() {
  return (
    <nav className=" lg:px-[15%] px-[5%] py-9">
      <div className="flex justify-between items-center">
        <div className="left flex items-center md:gap-16">
          <div className="logo">
            <img
              className="h-8"
              src="https://prettyrecon.com/static/assets/img/logo.svg"
            />
          </div>
          <div className="hidden md:block menu">
            <Menu />
          </div>
        </div>
        <ul className="right flex gap-10 items-center">
          <div className="">
            <MenuItem item="Sign In" />
          </div>
          <div className="cta-2 border-2 border-[#d8d4d4] hover:border-white cursor-pointer rounded-lg px-4 py-2">
            <a>Get Started</a>
          </div>
        </ul>
      </div>
      <div className="md:hidden mobile-menu flex">
        <Menu />
      </div>
    </nav>
  );
}
