/* eslint-disable @next/next/no-img-element */
const IndustryTabs = ({ tabs }: { tabs: any }) => {
  return (
    <div className="mt-12 mb-4 md:mb-0 md:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Smart Solutions for Every Industry
          </h2>
          <p className="text-lg text-gray-600 dark:text-white">
          We build powerful software to help your business grow.
          </p>
        </div>

        <div className="pb-6">
          <div className="container mx-auto flex gap-4 justify-center flex-wrap">
            {tabs.map((tab: any, index: any) => (
              <div
                key={index}
                className="group flex flex-col items-center cursor-pointer transition-all duration-300 border border-gray-200 dark:border-gray-800 rounded-lg p-2 w-[100px] h-[100px] justify-center"
              >
                <div className="relative w-10 h-10 mb-4">
                  <img
                    // src={tab.notActiveIcon}
                    src={tab.activeIcon}
                    alt={tab.title}
                    className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0"
                    decoding="async"
                  />
                  <img
                    src={tab.activeIcon}
                    alt={tab.title}
                    className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    decoding="async"
                  />
                </div>
                <div className="text-center text-gray-700 dark:text-white">
                  {tab.title}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

const industries = [
  {
    title: "Healthcare",
    activeIcon: "/icons/ic-ch-1-active.svg"
  },
  {
    title: "Finance",
    activeIcon: "/icons/ic-ch-2-active.svg"
  },
  {
    title: "Technology",
    activeIcon: "/icons/ic-ch-3-active.svg"
  },
  {
    title: "Retail",
    activeIcon: "/icons/ic-ch-4-active.svg"
  },

  {
    title: "SaaS",
    activeIcon: "/icons/ic-ch-5-active.svg"
  },
  {
    title: "Business",
    activeIcon: "/icons/ic-ch-6-active.svg"
  },
  {
    title: "Media ",
    activeIcon: "/icons/ic-ch-7-active.svg"
  },

  {
    title: "AI",
    activeIcon: "/icons/ic-ch-8-active.svg"
  }
];
// Usage example
export const IndustrySection = () => {

  return <IndustryTabs tabs={industries} />;
};


