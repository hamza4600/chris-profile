import Image from 'next/image';

interface TechnologyItem {
  highlighted: boolean;
  title: string;
  content: string;
}

interface Technology {
  name: string;
  items: TechnologyItem[];
}

interface TechStackProps {
  stack: {
    icons: string[];
    technologies: Technology[];
  };
}

export const TechStack: React.FC<TechStackProps> = ({ stack }) => {
  return (
    <section className="my-8">
      <h2 className="md:text-[38px] sm:text-[28px] text-[24px] leading-[1.4em] dark:text-primary text-black -tracking-[0.5px]">Core Technologies</h2>
      {/* <div className="flex flex-wrap gap-4 mb-6">
        {stack.icons.map((icon, index) => (
          <Image
            key={index}
            src={icon}
            alt={`Technology icon ${index + 1}`}
            width={40}
            height={40}
          />
        ))}
      </div> */}
      {stack.technologies.map((tech, index) => (
        <div key={index} className="mb-4 mt-4">
          <ul className=" ">
            {tech.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                {item.highlighted ? (
                  <strong className="font-bold md:text-[20px] dark:text-primary text-black leading-[1.4em]">{item.title}</strong>
                ) : (
                  item.title
                )}
                : {<span className="md:text-[20px] dark:text-secondary text-black leading-[1.4em]">{item.content}</span>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

interface KeyFeaturesProps {
  features: TechnologyItem[];
}

export const KeyFeatures: React.FC<KeyFeaturesProps> = ({ features }) => {
    return (
      <div className="key-features">
        <h2 className="text-2xl font-bold mb-4">Key Features</h2>
        <ul>
          {features.map((feature, index) => (
            <li key={index} className={feature.highlighted ? 'highlighted' : ''}>
              <strong
                className={feature.highlighted ? 'font-bold' : ''}
              >{feature.title}</strong>
              <span
                className={'ml-2'}
              >{feature.content}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

