"use client";
import Image from "next/image";
import { NavLinks } from "../../constants";
import Switcher from "../switcher";
import { useState } from "react";

const Header = () => {
  let [showDropDown,setShowDropDown]=useState(false)
  let [hoverText,setHoverText]=useState("ABOUT ME")

  return (
    <header className="header sticky top-0 left-0 right-0 px-16 z-40 text-[#0E1B18] border-black shadow-md rounded-md max-lg:px-4 bg-white !bg-opacity-90 dark:bg-[#0E1B1B] dark:text-white dark:shadow-slate-600">
      <nav className=" flex justify-between items-center border-gray-500">
        <div className="rouded-full py-1 dark:hidden">
          <Image
            src="/images/BrandLogoLight.png"
            alt=""
            width={"400"}
            height={400}
            style={{ height: "56px", width: "56px" }}
          />
        </div>
        <div className="rouded-full py-1 hidden dark:block">
          <Image
            src="/images/BrandLogoDark.jpg"
            alt=""
            width={400}
            height={400}
            style={{ height: "56px", width: "56px", borderRadius: "50%" }}
          />
        </div>
        <div>
          <ul className="flex justify-center items-center align-middle gap-8 max-md:hidden md:gap-6 font-medium">
            {NavLinks.map((ele) => (
              <li key={ele.label}>
                <a href={ele.href}>{ele.label.toUpperCase()}</a>
              </li>
            ))}
            <li>
              <Switcher />
            </li>
          </ul>
        </div>
        <div className="hidden max-md:block">
          <Image
            src="/icons/hamburger.svg"
            alt=""
            width={"100"}
            height={100}
            style={{ height: "28px", width: "44px",cursor:"pointer" }}
            onClick={(e:any)=>setShowDropDown(!showDropDown)}
          />
        </div>
      </nav>
      {showDropDown && <div>
        <ul className="absolute top-20 right-4 bg-white p-4 rounded-md text-sm">
            {NavLinks.map((ele) => (
              <li key={ele.label} className="py-1.5 px-6 m-1 rounded-md" style={hoverText==ele.label.toUpperCase()?{backgroundColor:"#ABDED1"}:{}}>
                <a href={ele.href} className="block" onMouseEnter={()=>setHoverText(ele.label.toUpperCase())} onClick={()=>setShowDropDown(!showDropDown)}>{ele.label.toUpperCase()}</a>
              </li>
            ))}
          </ul>
        </div>}
    </header>
  );
};

export default Header;
