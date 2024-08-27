import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import ThemeToggle from "../Atoms/ToogleTheme";

const Navbar = () => {
  return (
    <div className="w-full max-w-[1080px] flex justify-between items-center py-8 px-[30px]">
      <img
        decoding="async"
        src="https://framerusercontent.com/images/3dpALmvrIR88qPmbDlYoTyJSig.png"
        alt=""
        className="w-[48px] h-[45x] object-cover object-center"
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
