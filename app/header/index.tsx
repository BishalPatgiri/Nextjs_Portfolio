import Image from "next/image"
import logo from "../../assets/images/BrandLogoLight.png"

const Header = () => {
  return (
    <header className="p-4">
      <nav>
        <div className="rouded-full py-1">
        <Image src={logo} alt="" width={'100'} height={100} style={{height:"48px",width:"48px",borderRadius:"50%"}} />
        </div>
      </nav>
    </header>
  )
}

export default Header