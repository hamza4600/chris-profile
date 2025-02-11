import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
};

const HomePageBlogSec = ({ blogs }: { blogs: any }) => {
    return (
        <section
            id="blogs"
            className="max-w-7xl px-4 sm:px-6 lg:px-8 py-10"
        >
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 w-full">
                <div className="flex flex-row justify-between items-center w-full">

                    <h2 className="dark:text-primary max-md:text-center font-satoshi text-black md:text-[38px] text-[30px] leading-[1.2em] -tracking-[0.5px]">Browse our latest blog articles</h2>

                    <Link 
                    href="/blog" 
                    className="text-sm dark:text-secondary text-black font-medium border border-gray-200 dark:border-gray-800 rounded-lg px-4 py-2">
                        View all articles</Link>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.isArray(blogs?.blogs) && blogs?.blogs?.map((blog: any) => (
                    <Link
                        key={blog._id}
                        href={`/blog/${blog.slug?.current}`}>
                        <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="relative w-full h-full overflow-hidden">
                            <Image
                                src={urlFor(blog.cardData.image).url()}
                                alt={truncateText(blog.title, 100)}
                                width={550}
                                height={356}
                                className="w-full h-full md:h-[215px] object-cover transition-transform duration-300 hover:scale-105"
                                />
                                </div>

                            <div className="p-3 md:p-4">


                                <h3 className="text-1xl font-semibold text-gray-800 dark:text-primary">{truncateText(blog?.cardData?.title, 65)}</h3>
                                <p className="text-gray-700 dark:text-gray-300 mt-2"> {truncateText(blog?.cardData?.description, 120)}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

        </section>

    )
}

export default HomePageBlogSec;
