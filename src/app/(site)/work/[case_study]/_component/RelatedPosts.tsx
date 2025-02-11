import Link from "next/link";

import { urlFor } from "@/sanity/lib/image";

const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
};

const RelatedPosts = ({ relatedPosts }: { relatedPosts: any }) => {
    return (
        <section className="mt-12" id="related-posts">
            <h2 className="md:text-[38px] sm:text-[28px] text-[24px] leading-[1.4em] dark:text-primary text-black -tracking-[0.5px] mb-8 capitalize">Explore Related Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2 gap-4 md:gap-8">   
                {relatedPosts.map((post: any) => (
                    <Link href={`/blog/${post.slug.current}`} key={post.slug.current}>
                         <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                            
                        <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <img src={urlFor(post.cardData.image).url()} alt={truncateText(post.cardData.title, 100)} className="w-full h-full object-cover" width={550} height={356} />
                        </div>
                        <div className="p-3 md:p-6">
                            <h3 className="text-xl font-semibold dark:text-primary text-black" title={post.cardData.title}>{truncateText(post.cardData.title, 60)}</h3>
                            <p className=" dark:text-secondary text-black mt-2">{truncateText(post.cardData.description, 160)}</p>
                        </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default RelatedPosts;