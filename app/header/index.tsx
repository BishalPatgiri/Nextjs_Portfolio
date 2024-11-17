"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import LogoLight from "../../assets/images/BrandLogoLight.png";
import LogoDark from "../../assets/images/BrandLogoDark.jpg";
import hamburg from "../../assets/icons/hamburger.svg";
import { NavLinks } from "@/constants";
import Switcher from "../../components/switcher";

const Header = () => {
  const [sticky, setSticky] = useState(false);

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  return (
    <header className="header sticky top-0 left-0 right-0 px-16 z-40 text-[#0E1B18] font-bold border-black shadow-md rounded-md max-lg:px-4 bg-white !bg-opacity-90 dark:bg-[#0E1B1B] dark:text-white dark:shadow-slate-600">
      <nav className=" flex justify-between items-center border-gray-500">
        <div className="rouded-full py-1 dark:hidden">
          <Image
            src={LogoLight}
            alt=""
            width={"100"}
            height={100}
            style={{ height: "56px", width: "56px", borderRadius: "50%" }}
          />
        </div>
        <div className="rouded-full py-1 hidden dark:block">
          <Image
            src={LogoDark}
            alt=""
            width={"100"}
            height={100}
            style={{ height: "56px", width: "56px", borderRadius: "50%" }}
          />
        </div>
        <div>
          <ul className="flex justify-center items-center align-middle gap-8 max-md:hidden md:gap-6">
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
            src={hamburg}
            alt=""
            width={"100"}
            height={100}
            style={{ height: "28px", width: "44px" }}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
