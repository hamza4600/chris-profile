import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import ThemeToggle from "../Atoms/ToogleTheme";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full max-w-[1080px] flex justify-between items-center py-8 px-[30px]">
      <Image
        decoding="async"
        src="https://framerusercontent.com/images/3dpALmvrIR88qPmbDlYoTyJSig.png"
        className="w-[48px] h-[45x] object-cover object-center"
        alt="Logo"
        width={48}
        height={45}
      />
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <MobileNav />
        <DesktopNav />
      </div>
    </div>
  );
};

export default Navbar;
