import Link from "next/link";
import Button from "../Atoms/Button";
const links = [
    {
        name: "Work",
        href: "/",
    },
    {
        name: "Experience",
        href: "/",
    },
    {
        name: "FAQ",
        href: "/",
    },
    // {
    //     name: "Get in Touch",
    //     href: "/",
    // }
];

const Navbar = () => {
    return (
        <div className="w-full max-w-[1080px] flex justify-between items-center py-8 px-[30px]">
        <img decoding="async" src="https://framerusercontent.com/images/3dpALmvrIR88qPmbDlYoTyJSig.png" alt="" className="w-[48px] h-[45x] object-cover object-center" />
        <div className="flex gap-4 items-center">
            {links.map((link) => (
                <Link key={link.name} href={link.href} className="text-white leading-[1em]">
                    {link.name}
                </Link>
            ))}
            <Button size="small" className="text-[16px] leading-[1em]">
                Get in Touch
            </Button>
        </div>
        </div>
    )
}

export default Navbar