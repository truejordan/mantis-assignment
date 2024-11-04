import React from "react";
import LoginButton from "./LoginButton";
import Icons from "./Icons";

function Navbar() {
  return (
    <div className="flex w-full py-6 px-12 bg-background border-b-[1px] border-white/10 items-center justify-between fixed top-0">
      <div className="text-green-mantis">
        <Icons height={32} width={26.7} />
      </div>
      <LoginButton />
    </div>
  );
}

export default Navbar;
