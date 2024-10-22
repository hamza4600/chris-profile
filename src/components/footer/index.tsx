import Link from "next/link";
import Button from "../Atoms/Button";

const links = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hamza-khan-tanoli-845099205/",
  },
  {
    name: "Mail",
    href: "mailto:hkhantanoli@gmail.com",
  },
  {
    name: "Website",
    href: "https://hamza-v2.vercel.app/",
  },
];

const Footer = () => {
  return (
    <footer className="w-full flex flex-col max-w-[1080px] px-6 pb-[30px] sm:pb-[100px] relative">
      <div className="md:pt-[40px] sm:pt-[68px] pt-[20px] pb-[68px] sm:pb-[120px]">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-12">
            <div className="flex flex-col sm:gap-2.5 gap-8">
              <h1 className="md:text-[38px] text-[30px] font-normal leading-[1.2em] tracking-[-0.7px] dark:text-primary text-black sm:text-start text-center">
                Ready to Start Your Project?
              </h1>
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
      <div className="flex items-start max-md:flex-col max-md:gap-8 max-md:text-[12px] justify-between dark:text-white text-black">
        <div className="flex flex-col gap-4">
          <p className="max-md:text-center max-md:w-full">Hamza Khan ©
            <span className="font-bold ml-1">2024</span>
          </p>
          <div className="flex items-center gap-2">
            <div
              className="animate-blink"
            >
              <div className="w-3 h-3 rounded-full bg-[rgb(120,227,122)]" title="Open for work"></div>
            </div>
            <p className="max-md:text-center max-md:w-full">Open for work</p>
          </div>
        </div>
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
