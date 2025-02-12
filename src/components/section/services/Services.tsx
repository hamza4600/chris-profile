import React from "react";
import Link from "next/link";

const ServiceCard = ({ title, link, description, specs, imgSrc, chatLink }: { title: string, link: string, description: string, specs: string[], imgSrc: string, chatLink: string }) => {
  return (
    <div className="bg-white dark:bg-[#111111] shadow-lg rounded-2xl p-4 md:p-6 flex flex-col-reverse items-center gap-3 border border-gray-200 dark:border-gray-800">
      <div className="flex-1">
        <h4 className="text-xl font-semibold mb-2 ">
          {title}
        </h4>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">

          {specs.map((spec, index) => (
            <span key={index} className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm px-3 py-1 rounded-full">{spec}</span>
          ))}
        </div>
        {/* <div className="flex gap-2 mt-4">
          <Link
            href={link}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            aria-label={`Learn more about ${title}`}
          >
            Learn More
            <span className="sr-only"> about {title}</span>
          </Link>
          
          {chatLink && (
            <Link
              href={chatLink}
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              aria-label={`Start chat consultation for ${title}`}
            >
              Chat Now
              <span className="sr-only"> to discuss {title}</span>
            </Link>
          )}
        </div> */}
      </div>
      <div className="flex-shrink-0 dark:bg-white">
        <img src={imgSrc} alt={title} className="w-32 md:w-48 h-auto" />
      </div>
    </div>
  );
};
const services = [
    {
        title: "Front-end Development",
        link: "/service/frontend-development",
        description: "Modern web interfaces with pixel-perfect implementation and responsive design.",
        specs: ["React/Next.js", "TypeScript", "Web Components", "Tailwind CSS", "Performance Optimization"],
        imgSrc: "/icons/s-5.webp",
        chatLink: "#modalGetQuote"


    },
    {
        title: "Back-end Development",
        link: "/service/backend-development",
        description: "Robust server-side solutions handling complex business logic and high traffic loads.",
        specs: ["Node.js/Deno", "Python/Django", "Golang", "GraphQL", "PostgreSQL/MongoDB"],
        imgSrc: "/icons/s-2.svg",
        chatLink: "#modalGetQuote"

      },
    {
      title: "SaaS Development",
      link: "/service/saas-development",
      description: "Build scalable cloud-based solutions with modern architecture and seamless integrations.",

      specs: ["AWS/GCP/Azure", "Microservices", "Docker & Kubernetes", "CI/CD Pipelines"],
      imgSrc: "/icons/s-3.svg",
      chatLink: "#modalGetQuote"
    },

    {
        title: "AI & Machine Learning",
        link: "/service/ai-development",
        description: "Smart solutions powered by predictive analytics and intelligent automation.",
        specs: ["LLM Integration", "TensorFlow/PyTorch", "Computer Vision", "ChatGPT API", "MLOps"],
        imgSrc: "/icons/s-4.svg",
        chatLink: "#modalGetQuote"
      },

    {
      title: "E-commerce Solutions",
      link: "/service/e-commerce",
      description: "Create high-converting online stores with secure payment gateways and inventory management.",
      specs: ["Shopify Plus", "Stripe/PayPal", "Headless Commerce","WooCommerce"],
      imgSrc: "/icons/s-1.svg",
      chatLink: "#modalGetQuote"
    },

    {
      title: "Compliance Solutions",
      link: "/service/compliance",
      description: "Ensure regulatory adherence and data protection across your digital ecosystem.",
      specs: ["GDPR", "HIPAA", "PCI-DSS", "SOC 2", "ISO 27001"],
      imgSrc: "/icons/s-6.svg",
      chatLink: "#modalGetQuote"
    },
    
];
const ServicesSection2 = () => {

  return (
    <div className="container mx-auto px-4 py-10">
      {/* <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2> */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            title={service.title}
            description={service.description}
            specs={service.specs}
            imgSrc={service.imgSrc}
            chatLink={service.chatLink}
            link={service.link || ''} // Provide empty string as fallback
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection2;
