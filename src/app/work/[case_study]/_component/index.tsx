import Image from 'next/image';

// Helper Components
const Header = ({ title, description }: { title: string; description: string }) => (
  <div className="mx-auto">
    <h1 className="text-2xl md:text-[46px] font-medium leading-[1.2em] dark:text-primary text-black -tracking-[0.5px]">
      {title}
    </h1>
    <p className="text-base md:text-[24px] sm:mt-8 mt-4 leading-[1.4em] dark:text-primary text-black">
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
    className="sm:mb-12 mb-8 rounded-2xl md:h-[529px] sm:h-auto sm:object-cover object-contain sm:mt-12 mt-8"
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
      <div key={index} className="flex flex-col gap-3 sm:pb-12 pb-8">
        <h2 className="md:text-[38px] sm:text-[28px] text-[24px] leading-[1.4em] dark:text-primary text-black -tracking-[0.5px]">
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
  <div className="mx-auto">
    <h2 className="md:text-[38px] sm:text-[28px] text-[24px] leading-[1.4em] dark:text-primary text-black -tracking-[0.5px]">
      Process
    </h2>
    <div className="flex flex-col gap-8 sm:mt-5 mt-4">
      {Object.entries(process).map(([key, value]) => (
        <p key={key} className="md:text-[20px] dark:text-secondary text-black leading-[1.4em]">
          <strong className="font-bold text-[16px] sm:text-[20px] leading-[1.4em] dark:text-primary text-black -tracking-[0.5px]">
            {key.charAt(0).toUpperCase() + key.slice(1)}:
          </strong>{" "}
          {value}
        </p>
      ))}
    </div>
  </div>
);

const Stack = ({ stack }: { stack: { icons: string[] } }) => (
  <div className="mx-auto md:py-16 sm:py-12 py-8">
    <h2 className="md:text-[38px] sm:text-[28px] text-[24px] leading-[1.4em] dark:text-primary text-black -tracking-[0.5px]">
      Stack
    </h2>
    <div className="flex flex-row gap-4 mt-5 bg-[#252523] rounded-[12px] sm:p-4 p-2">
      {stack.icons.map((icon, index) => (
        <Image key={index} src={icon} alt={`Icon ${index}`} width={48} height={48} className="object-cover rounded-lg sm:w-12 sm:h-12 w-8 h-8" />
      ))}
    </div>
  </div>
);

const Conclusion = ({ conclusion }: { conclusion: string }) => (
  <div className="mx-auto md:pb-16 sm:pb-12 pb-8">
    <h2 className="md:text-[38px] sm:text-[28px] text-[24px] leading-[1.4em] dark:text-primary text-black -tracking-[0.5px] mb-4">
      Conclusion
    </h2>
    <p className="md:text-[20px] dark:text-secondary text-black leading-[1.4em]">
      {conclusion}
    </p>
  </div>
);

export { Header, MainImage, ProjectDetails, ChallengeAndResult, Process, Stack, Conclusion };
