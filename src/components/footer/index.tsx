import Link from "next/link";
// import Button from "../Atoms/Button";
// import { calendlyUrl } from "@/constants";
import { domainURL } from "@/constants";
import { Rss } from "lucide-react";

const links = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hamza-khan-tanoli-845099205/",
  },
  {
    name: "Github",
    href: "https://github.com/hamza4600",
  },
  {
    name: "Mail",
    href: "mailto:hkhantanoli@gmail.com",
  },
  {
    name: "Sitemap",
    href: `${domainURL}/sitemap.xml`,
  },
];

const WorkWithMe = () => {
  return (
    <div className="flex items-center gap-2 border-gray-200 dark:border-gray-800  cursor-pointer  border rounded-full px-3 py-2">
        <div className="animate-pulse-green w-2 h-2 scale-100 rounded-full bg-[rgb(120,227,122)]" title="Open for work"></div>
      <p className="max-md:text-center max-md:w-full">Open for work</p>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="w-full flex flex-col max-w-7xl px-6 pb-[30px] sm:pb-[100px] relative">
      {/* <div className="md:pt-[40px] sm:pt-[68px] pt-[20px] pb-[68px] sm:pb-[120px]">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-12">
            <div className="flex flex-col sm:gap-2.5 gap-8">
              <h2 className="md:text-[38px] text-[30px] font-normal leading-[1.2em] tracking-[-0.7px] dark:text-primary text-black sm:text-start text-center">
                Ready to Start Your Project?
              </h2>
              <p className="dark:text-secondary text-black text-center text-[20px] md:text-[24px] font-normal leading-[1.2em] tracking-[-0.5px]">
                Let&apos;s bring your design vision to life.
              </p>
            </div>

            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
              <Button size="large" className="w-[227px] font-medium">
                Get Started
              </Button>
            </a>
          </div>
        </div>
      </div> */}
      <div className="flex items-start max-md:flex-col max-md:gap-8 max-md:text-[12px] justify-between dark:text-white text-black">
        <div className="flex sm:gap-4 gap-2 items-center justify-between sm:w-auto w-full">
          <p>Hamza Khan ©
            <span className="font-bold ml-1">{new Date().getFullYear()}</span>
          </p>
          {/* <WorkWithMe /> */}
        </div>
        <div className="flex gap-4 items-center max-md:w-full max-md:justify-between">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="dark:text-white text-black hover:underline">
              {link.name}
            </Link>
          ))}
          <a href="/feed.xml" target="_blank" rel="noopener noreferrer">
            <Rss />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
