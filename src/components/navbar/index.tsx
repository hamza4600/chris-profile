import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import ThemeToggle from "../Atoms/ToogleTheme";
import Image from "next/image";
import Link from "next/link";
// import LangSelector from "./langSelector";

const Navbar = () => {
  return (
    <div className="w-full max-w-7xl flex justify-between items-center py-8 px-[30px]">
      <Link href="/">
        <Image
          decoding="async"
          src="https://framerusercontent.com/images/3dpALmvrIR88qPmbDlYoTyJSig.png"
          className="w-[48px] h-[45x] object-cover object-center"
          alt="Logo"
          width={48}
          height={45}
        />
      </Link>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <MobileNav />
        <DesktopNav />
        {/* <LangSelector /> */}
      </div>
    </div>
  );
};

export default Navbar;
