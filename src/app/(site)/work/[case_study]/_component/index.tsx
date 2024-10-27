import { urlFor } from '@/sanity/lib/image';
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
    src={image ? urlFor(image)?.url() : ''}
    alt={title}
    width={1000}
    height={529}
    quality={100}
    priority
    className="sm:mb-12 mb-8 rounded-2xl sm:object-cover object-contain sm:mt-12 mt-8 w-full"
  />
);

const Conclusion = ({ conclusion }: { conclusion: string }) => (
  <div className="mx-auto pb-8 mt-8">
    <h2 className="md:text-[38px] sm:text-[28px] text-[24px] leading-[1.4em] dark:text-primary text-black -tracking-[0.5px] mb-4">
      Conclusion
    </h2>
    <p className="md:text-[20px] dark:text-secondary text-black leading-[1.4em]">
      {conclusion}
    </p>
  </div>
);

export { Header, MainImage, Conclusion };
