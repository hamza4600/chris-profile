import Link from "next/link";
import { services } from "./data";

const ServiceCard = ({ imageSrc, alt, link, title, description }: { imageSrc: string, alt: string, link: string, title: string, description: string }) => (
    <div
        className="bg-white p-4 shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-[#111111] dark:border dark:border-gray-800 rounded-xl">
        <img
            decoding="async"
            src={imageSrc}
            alt={alt}
            className=" object-contain mb-4"
        />
            <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-500 dark:text-white">
                {title}
            </h3>
        <p 
        className="mt-2 text-gray-600 dark:text-gray-300"
            // className="sm:text-lg dark:text-primary text-black mt-2"
        >{description}</p>
    </div>
);

const ServicesSection = () => {

    return (
        <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                <div>
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-primary">Services</h2>
                    <p className="mt-2 text-gray-700 dark:text-gray-300 max-w-[800px]">We are a custom software development firm that specializes in mobile applications, progressive web apps (PWAs), & human-centered, research-led custom software development.</p>
                </div>
                {/* <Link 
                href="/services" 
                className="mt-4 md:mt-0 rounded-full bg-primary text-white dark:border dark:border-primary dark:bg-transparent dark:text-primary px-6 py-3 hover:bg-primary/80 transition-colors duration-300">
                View All</Link> */}

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </section>

    )
}

export default ServicesSection;
