'use client'
import { useState } from "react";
import Image from "next/image"
import logo from "../../assets/images/BrandLogoLight.png"
import hamburg from "../../assets/icons/hamburger.svg"
import { NavLinks } from "@/constants"
import Switcher from "../../components/switcher";

const Header = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <header className="px-12 border-black shadow-md mx-1 rounded-md max-lg:px-4">
      <nav className=" flex justify-between items-center border-gray-500">
        <div className="rouded-full py-1">
        <Image src={logo} alt="" width={'100'} height={100} style={{height:"52px",width:"52px",borderRadius:"50%"}} />
        </div>
        <div style={{fontFamily:"Open Sans"}}>
          <ul className="flex justify-center align-middle gap-8 max-md:hidden md:gap-6">
            {
              NavLinks.map(ele=>(
                <li key={ele.label}>
                  <a href={ele.href}>{ele.label.toUpperCase()}</a>
                </li>
              ))
            }
            <li>
                    <Switcher isDarkMode={isDarkMode} setDarkMode={setDarkMode}/>
            </li>


          </ul>
        </div>
        <div className="hidden max-md:block">
        <Image src={hamburg} alt="" width={'100'} height={100} style={{height:"28px",width:"44px"}} />
        </div>
      </nav>
    </header>
  )
}

export default Header