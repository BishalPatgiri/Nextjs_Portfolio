import Image from "next/image"
import logo from "../../assets/images/BrandLogoLight.png"
import hamburg from "../../assets/icons/hamburger.svg"
import { NavLinks } from "@/constants"

const Header = () => {
  return (
    <header className="px-4 border-black shadow-md mx-1 rounded-md">
      <nav className=" flex justify-between items-center border-gray-500">
        <div className="rouded-full py-1">
        <Image src={logo} alt="" width={'100'} height={100} style={{height:"52px",width:"52px",borderRadius:"50%"}} />
        </div>
        <div>
          <ul className="flex justify-centeralign-middle gap-10 max-md:hidden">
            {
              NavLinks.map(ele=>(
                <li key={ele.label}>
                  <a href={ele.href}>{ele.label}</a>
                </li>
              ))
            }

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