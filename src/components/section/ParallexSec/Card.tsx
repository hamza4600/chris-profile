import React from 'react';
import { CaseStudy } from './helper';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import Button from '@/components/Atoms/Button';
import { BlueTick } from '../data';

interface CardProps {
    item: CaseStudy;
}

interface CardStatsProps {
    metrics?: { title: string; description: string }[];
}

const CardStats: React.FC<CardStatsProps> = ({ metrics }) => (
    <div className="flex items-center md:gap-16 flex-row w-full max-w-full gap-3">
        {Array.isArray(metrics) && metrics.map((metric, index) => (
            <div className="flex sm:gap-3 gap-2 flex-col" key={index}>
                <h2 className={`md:text-[18px] dark:text-primary text-black`}>
                    {metric.title}
                </h2>
                <span className={`md:text-[26px] dark:text-primary text-black`}>
                    {metric.description}
                </span>
            </div>
        ))}
    </div>
);

const Card: React.FC<CardProps> = ({ item }) => {
    const { caseStudyCardData, slug } = item;
    const { title, subtitle, description, image, metrics, tags } = caseStudyCardData;

    return (
        <Link
            href={`/work/${slug.current}`}
            className="w-full max-w-7xl rounded-[24px] shadow-md opacity-100 md:px-10 px-4 md:py-[60px] py-[20px] dark:bg-gradient-to-b dark:from-[#091319] dark:to-[#0F0F0F] bg-[#fbfbfb] text-white dark:text-white border dark:border-white/[0.14] border-gray-200"
        >
            <div className="flex justify-between max-md:flex-col">
                <div className="flex flex-col lg:justify-between h-full lg:min-h-[380px] lg:max-w-[480px] w-full">
                    <div>
                        <h3 className="md:text-[20px] text-[16px] mb-2 w-fit rounded-full px-3 py-1 dark:bg-[hsla(0,0%,10%,1)] bg-[#fbfbfb] dark:text-primary text-black border dark:border-white/[0.14] border-gray-200">
                            {subtitle}
                        </h3>
                        <h1 className="md:text-[30px] text-[20px] sm:text-[26px] -tracking-[0.5px] sm:leading-[1.4em] dark:text-white text-black">
                            {title}
                        </h1>
                        <p className="mt-2.5 md:text-[18px] dark:text-primary text-black">
                            {description}
                        </p>
                        {tags.length > 0 && (
                            <div className="flex gap-2 flex-wrap mt-2.5">
                                {
                                    tags.map((tag, index) => (
                                        <div className="flex items-center gap-2 rounded-full px-3 py-1 bg-[#fbfbfb] dark:bg-[hsla(0,0%,10%,1)] border dark:border-white/[0.14] border-gray-200 w-fit" key={index}>
                                            <BlueTick />
                                            <p key={index} className="md:text-[18px] dark:text-primary text-black ">{tag}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        )}

                        <Button className="hidden sm:block  sm:mt-6 mt-4 font-normal sm:font-medium text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3 max-w-fit">
                            <div className="text-white">See the Success Story</div>
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-6 max-lg:mt-6 justify-between">
                    <div className="md:max-w-[420px] w-full md:min-h-[240px] min-h-[200px] rounded-lg overflow-hidden flex-1">
                        <img
                            className="object-cover w-full h-full"
                            src={urlFor(image).url()} // Use urlFor to generate the image URL
                            alt={title}
                            style={{ objectPosition: 'center center', imageRendering: 'auto' }}
                        />
                    </div>
                    <CardStats metrics={metrics} />
                </div>
            </div>
        </Link>
    );
};

export default Card;