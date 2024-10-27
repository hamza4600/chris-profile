"use client";
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';

interface CaseStudy {
  slug: {
    current: string;
  };
  caseStudyCardData: {
    title: string;
    description: string;
    image: {
      asset: {
        url: string;
      };
    };
  };
}

interface OtherCaseStudiesProps {
  otherCaseStudies: CaseStudy[];
}

// Helper function to truncate text
const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
};

const OtherCaseStudies: React.FC<OtherCaseStudiesProps> = ({ otherCaseStudies }) => {
    return (
        <section className="other-case-studies sm:mt-12 mt-0"
          id="other-case-studies"
        >
          <h2 className="md:text-[38px] sm:text-[28px] text-[24px] leading-[1.4em] dark:text-primary text-black -tracking-[0.5px] mb-8 ">Explore some of our latest projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {otherCaseStudies.map((caseStudy) => (
              <Link href={`/work/${caseStudy.slug.current}`} key={caseStudy.slug.current}>
                <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative w-full h-auto">
                    <Image
                      src={urlFor(caseStudy.caseStudyCardData.image).url()}
                      alt={caseStudy.caseStudyCardData.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover"
                      priority
                      />
                      </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 dark:text-white text-black">{
                       truncateText(caseStudy.caseStudyCardData.title, 30)
                    }</h3>
                    <p className=" dark:text-primary text-black">{truncateText(caseStudy.caseStudyCardData.description, 100)}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      );
};

export default OtherCaseStudies;