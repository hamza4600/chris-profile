const serviceColumns = [
    {
      title: "Full Stack Development",
      items: [
        "Frontend & Backend Development",
        "Next.js, React.js, Node.js",
        "REST API Integration",
        "Database (Prisma, MySQL, Firebase)",
        "Real-time Features & WebSockets",
      ],
    },
    {
      title: "E-commerce Solutions",
      items: [
        "Shopify & Shopify Plus",
        "Headless Commerce (Hydrogen, Remix)",
        "Custom Themes & Checkout",
        "Payment Gateway  (Stripe)",
        "Third-party API Integration",
      ],
    },
    {
      title: "AI & Automation",
      items: [
        "AI Chatbots & Assistants",
        "AI SaaS Solutions",
        "AI Document Summarization",
        "Workflow Automation",
        "OpenAI, Gemini, Custom AI/ML",
      ],
    },
    {
      title: "CMS Development",
      items: [
        "Custom CMS Builds",
        "Sanity, WordPress, FireCMS",
        "T3 Stack & Tailwind CSS",
        "Theme & Plugin Development",
        "Multi-CMS Data Integration",
      ],
    },
    {
      title: "Security & Compliance",
      items: [
        "HIPAA & SOC2 Compliance",
        "Security Audits & Pen Testing",
        "GDPR & CCPA Readiness",
        "WCAG/ADA Accessibility",
        "Authentication (NextAuth, Firebase, Clerk)",
      ],
    },
    {
      title: "Analytics & Marketing",
      items: [
        "GA4 & GTM Setup",
        "SEO & CRO Optimization",
        "Web & Performance Audits",
        "Klaviyo & Email Marketing",
        "Agile Project Management",
      ],
    },
    {
      title: "DevOps & Deployment",
      items: [
        "CI/CD Pipelines",
        "AWS, GCP, Azure Hosting",
        "VPS & Server Management",
        "Git, Bitbucket, Linux CLI",
        "Cloud Storage (S3, Wasabi)",
      ],
    },
  ];
  


const FooterService = () => {
    return (
        <div className="w-full flex flex-wrap justify-between gap-8 py-12">
            {serviceColumns.map((col) => (
                <div key={col.title} className="flex flex-col min-w-[200px]">
                    <h3 className="mb-4 font-semibold text-lg">{col.title}</h3>
                    <ul className="flex flex-col gap-2">
                        {col.items.map((item) => (
                            <li
                                key={item}
                                className="bg-neutral-900/80 dark:bg-neutral-800/80 px-4 py-1.5 rounded-full text-sm w-fit"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default FooterService;