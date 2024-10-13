import Image from 'next/image';

// Helper Components
const Header = ({ title, description }: { title: string; description: string }) => (
  <div className="max-w-[800px] mx-auto p-8">
    <h1 className="text-2xl md:text-[46px] font-medium leading-[1.2em] dark:text-primary text-black -tracking-[0.5px]">
      {title}
    </h1>
    <p className="text-base md:text-[24px] mt-8 leading-[1.4em] dark:text-primary text-black">
      {description}
    </p>
  </div>
);

const MainImage = ({ image, title }: { image: string; title: string }) => (
  <Image
    src={image}
    alt={title}
    width={1000}
    height={529}
    className="md:w-[1000px] mb-12 rounded-2xl md:h-[529px] object-cover mt-12"
  />
);

const ProjectDetails = ({ location }: { location: { city: string } }) => (
  <div className="flex flex-col gap-6">
    {['Headquarters', 'Office', 'Branch', 'Subsidiary', 'Partner'].map((label, index) => (
      <div key={index}>
        <p className="text-[14px] md:text-[18px] font-medium dark:text-primary text-black leading-[1.2em]">
          {label}
        </p>
        <p className="text-[14px] md:text-[20px] mt-2 font-medium dark:text-secondary text-black leading-[1.2em]">
          {location.city}
        </p>
      </div>
    ))}
  </div>
);

const ChallengeAndResult = ({ challenge, result }: { challenge: string; result: string }) => (
  <div>
    {[{ title: 'Challenge', content: challenge }, { title: 'Result', content: result }].map((item, index) => (
      <div key={index} className="max-w-[470px] flex flex-col gap-3 pb-12">
        <h2 className="md:text-[38px] leading-[1.4em] dark:text-primary text-black -tracking-[0.5px]">
          {item.title}
        </h2>
        <p className="md:text-[20px] dark:text-secondary text-black leading-[1.4em]">
          {item.content}
        </p>
      </div>
    ))}
  </div>
);

const Process = ({ process }: { process: Record<string, string> }) => (
  <div className="max-w-[800px] mx-auto p-8">
    <h2 className="text-[38px] leading-[1.4em] dark:text-primary text-black -tracking-[0.5px]">
      Process
    </h2>
    <div className="flex flex-col gap-8 mt-5">
      {Object.entries(process).map(([key, value]) => (
        <p key={key} className="md:text-[20px] dark:text-secondary text-black leading-[1.4em]">
          <span className="font-bold text-[20px] leading-[1.4em] dark:text-primary text-black -tracking-[0.5px]">
            {key.charAt(0).toUpperCase() + key.slice(1)}:
          </span>{" "}
          {value}
        </p>
      ))}
    </div>
  </div>
);

const Stack = ({ stack }: { stack: { icons: string[] } }) => (
  <div className="max-w-[800px] mx-auto py-16 px-8">
    <h2 className="text-[38px] leading-[1.4em] dark:text-primary text-black -tracking-[0.5px]">
      Stack
    </h2>
    <div className="flex flex-row gap-4 mt-5 bg-[#252523] rounded-[12px] p-4">
      {stack.icons.map((icon, index) => (
        <Image key={index} src={icon} alt={`Icon ${index}`} width={48} height={48} className="object-cover" />
      ))}
    </div>
  </div>
);

const Conclusion = ({ conclusion }: { conclusion: string }) => (
  <div className="max-w-[800px] mx-auto pb-16 px-8">
    <h2 className="text-[38px] leading-[1.4em] dark:text-primary text-black -tracking-[0.5px]">
      Conclusion
    </h2>
    <p className="md:text-[20px] dark:text-secondary text-black leading-[1.4em]">
      {conclusion}
    </p>
  </div>
);

export { Header, MainImage, ProjectDetails, ChallengeAndResult, Process, Stack, Conclusion };
