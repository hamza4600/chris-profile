import MobileNav from "./MobileNav";
import DesktopNav, { GetInTouch } from "./DesktopNav";
import ThemeToggle from "../Atoms/ToogleTheme";
import Image from "next/image";
import Link from "next/link";
// import LangSelector from "./langSelector";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-8 md:px-[30px] w-full max-w-7xl mx-auto">
      <Link href="/">
        <Image
          decoding="async"
          src="/icon.png"
          // src="/HK-LOGO.svg"
          className="w-[48px] h-[45x] object-cover object-center"
          alt="Logo"
          width={48}
          height={45}
        />
      </Link>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        {/* <GetInTouch /> */}
        <MobileNav />
        <DesktopNav />
        {/* <LangSelector /> */}
      </div>
    </div>
  );
};

export default Navbar;
