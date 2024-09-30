import Link from "next/link";
import Button from "../Atoms/Button";

const links = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/goran-babarogic-810000220/",
  },
  {
    name: "Mail",
    href: "mailto:hello@nicey.studio",
  },
  {
    name: "Website",
    href: "https://www.nicey.studio",
  },
];

const Footer = () => {
  return (
    <footer className="w-full flex flex-col max-w-[1080px] px-8">
      <div className="md:pt-[40px] pt-[68px] pb-[128px]">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-12">
            <div className="flex flex-col gap-2.5">
              <p className="md:text-[38px] text-[30px] font-normal leading-[1.2em] tracking-[-0.7px] dark:text-primary text-black">
                Ready to Start Your Project?
              </p>
              <p className="dark:text-secondary text-black text-center text-[20px] md:text-[24px] font-normal leading-[1.2em] tracking-[-0.5px]">
                Let&apos;s bring your design vision to life.
              </p>
            </div>

            <Button size="large" className="w-[227px] font-medium">
              Get Started
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-start max-md:flex-col max-md:gap-8 max-md:text-[12px] justify-between dark:text-white text-black pb-[80px]">
        <p className="max-md:text-center max-md:w-full">Nicey Studio © Goran Babarogic 2023</p>
        <div className="flex gap-4 items-center max-md:w-full max-md:justify-between">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="dark:text-white text-black">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
