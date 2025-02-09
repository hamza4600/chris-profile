import React from "react";

const ServiceCard = ({ title, link, description, specs, imgSrc, chatLink }: { title: string, link: string, description: string, specs: string[], imgSrc: string, chatLink: string }) => {
  return (
    <div className="bg-white dark:bg-[#111111] shadow-lg rounded-2xl p-4 md:p-6 flex flex-col-reverse items-center gap-3 border border-gray-200 dark:border-gray-800">
      <div className="flex-1">
        <h4 className="text-xl font-semibold mb-2 ">
          {title}

        </h4>
        <h5 className="text-gray-700 dark:text-gray-300 mb-4">{description}</h5>
        <div className="flex flex-wrap gap-2 mb-4">

          {specs.map((spec, index) => (
            <span key={index} className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm px-3 py-1 rounded-full">{spec}</span>
          ))}
        </div>
        <div className="flex gap-4">
          {/* {chatLink && (
            <a href={chatLink} className="bg-[#000000] text-white px-4 py-2 rounded-lg hover:bg-[#111111]">
              Let&apos;s chat
            </a>
          )} */}
          {/* {link && (
            <a href={link} className="border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-300">
              Learn more
            </a>
          )} */}
        </div>
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
        imgSrc: "https://diffco.us/wp-content/themes/diffconew/static-template/build/images/about-us-v4/s-5.png",
        chatLink: "#modalGetQuote"
    },
    {
        title: "Back-end Development",
        link: "/service/backend-development",
        description: "Robust server-side solutions handling complex business logic and high traffic loads.",
        specs: ["Node.js/Deno", "Python/Django", "Golang", "GraphQL", "PostgreSQL/MongoDB"],
        imgSrc: "https://diffco.us/wp-content/themes/diffconew/static-template/build/images/about-us-v4/s-2.svg",
        chatLink: "#modalGetQuote"
      },
    {
      title: "SaaS Development",
      link: "/service/saas-development",
      description: "Build scalable cloud-based solutions with modern architecture and seamless integrations.",

      specs: ["AWS/GCP/Azure", "Microservices", "Docker & Kubernetes", "CI/CD Pipelines"],
      imgSrc: "https://diffco.us/wp-content/themes/diffconew/static-template/build/images/about-us-v4/s-3.svg",
      chatLink: "#modalGetQuote"
    },
    {
        title: "AI & Machine Learning",
        link: "/service/ai-development",
        description: "Smart solutions powered by predictive analytics and intelligent automation.",
        specs: ["LLM Integration", "TensorFlow/PyTorch", "Computer Vision", "ChatGPT API", "MLOps"],
        imgSrc: "https://diffco.us/wp-content/themes/diffconew/static-template/build/images/about-us-v4/s-4.svg",
        chatLink: "#modalGetQuote"
      },
    {
      title: "E-commerce Solutions",
      link: "/service/e-commerce",
      description: "Create high-converting online stores with secure payment gateways and inventory management.",
      specs: ["Shopify Plus", "Stripe/PayPal", "Headless Commerce","WooCommerce"],
      imgSrc: "https://diffco.us/wp-content/themes/diffconew/static-template/build/images/about-us-v4/s-1.svg",
      chatLink: "#modalGetQuote"
    },
    {
      title: "Compliance Solutions",
      link: "/service/compliance",
      description: "Ensure regulatory adherence and data protection across your digital ecosystem.",
      specs: ["GDPR", "HIPAA", "PCI-DSS", "SOC 2", "ISO 27001"],
      imgSrc: "https://diffco.us/wp-content/themes/diffconew/static-template/build/images/about-us-v4/s-6.svg",
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
