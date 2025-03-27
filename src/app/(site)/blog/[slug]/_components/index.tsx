import { urlFor } from '@/sanity/lib/image';
import { PortableText, PortableTextBlock, PortableTextComponentProps, PortableTextMarkComponentProps } from '@portabletext/react'
import styles from './style.module.css';

export const MainBlogContent = ({ blogPost }: { blogPost: any }) => {
    return (
        <div className={`${styles.container} prose prose-lg  mx-auto dark:prose-invert prose-headings:font-medium`}>
            <PortableText
                value={blogPost?.body}
                components={{
                    block: {
                        normal: ({ children }) => (
                            <p className="mb-4 text-zinc-800 dark:text-zinc-200 leading-7 
                               md:leading-8 text-[17px] md:text-[18px]">
                                {children}
                            </p>
                        ),
                        h1: ({ children }) => (
                            <h1 className="text-3xl md:text-4xl lg:text-[42px] mb-4 mt-10
                               leading-[1.15] md:leading-[1.1] tracking-[-0.8px] 
                               font-medium text-zinc-900 dark:text-zinc-100">
                                {children}
                            </h1>
                        ),
                        h2: ({ children }) => (
                            <h2 className="text-2xl md:text-3xl mb-4 mt-8 md:mt-12
                               leading-[1.2] tracking-[-0.6px]
                               text-zinc-900 dark:text-zinc-100">
                                {children}
                            </h2>
                        ),
                        h3: ({ children }) => (
                            <h3 className="text-xl md:text-2xl mb-4 mt-6 md:mt-10
                               leading-[1.25] tracking-[-0.4px] 
                               text-zinc-900 dark:text-zinc-100">
                                {children}
                            </h3>
                        ),
                        h4: ({ children }) => (
                            <h4 className="text-lg md:text-xl mb-3 mt-8 md:mt-10
                               leading-[1.3] tracking-[-0.3px]
                               text-zinc-900 dark:text-zinc-100">
                                {children}
                            </h4>
                        ),
                        blockquote: ({ children }) => (
                            <blockquote className="border-l-4 border-blue-500/80 pl-4 py-2 my-8 
                              italic text-zinc-700 dark:text-zinc-300 text-[17px]
                              bg-zinc-50/50 dark:bg-zinc-800/30">
                                {children}
                            </blockquote>
                        ),
                      list: ({ value, children }: PortableTextComponentProps<PortableTextBlock>) => {
                            const listStyle = value.listItem === 'number' ? 'list-decimal' : 'list-disc';
                            return (
                                <ul className={`mb-6 ${listStyle} pl-6 space-y-2 text-zinc-900 dark:text-zinc-100 text-[17px] md:text-[18px]`}>
                                    {children}
                                </ul>
                            );
                        },
                        listItem: ({ value, children }: PortableTextComponentProps<PortableTextBlock>) => (
                            <li className="mb-2 text-zinc-900 dark:text-zinc-100 text-[17px] md:text-[18px]">
                                {children}
                            </li>
                        ),
                    },
                    marks: {
                        link: ({ children, value }) => (
                            <a href={value?.href} className="text-blue-500 hover:text-blue-600 
                              dark:text-blue-400 dark:hover:text-blue-300 underline 
                              underline-offset-4 transition-colors">
                                {children}
                            </a>
                        ),
                        strong: ({ children }) => (
                            <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                                {children}
                            </strong>
                        ),
                        em: ({ children }) => (
                            <em className="italic text-zinc-900 dark:text-zinc-100">
                                {children}
                            </em>
                        ),
                        code: ({ children }) => (
                            <code className="bg-zinc-100 dark:bg-zinc-800/60 px-2 py-1 rounded-md 
                              text-[15px] font-mono text-zinc-800 dark:text-zinc-200
                              border border-zinc-200 dark:border-zinc-700">
                                {children}
                            </code>
                        ),
                    },
                    types: {
                        image: ({ value }: { value: any }) => {
                            const imageUrl = value._upload?.file 
                                ? value._upload.file // Handle direct uploads
                                : urlFor(value).url(); // Handle Sanity images

                            return (
                                <div className="my-8 relative">
                                    <img
                                        src={imageUrl}
                                        alt={value.alt || 'Blog post image'}
                                        className="rounded-lg w-full"
                                        loading="lazy"
                                    />
                                    {value.caption && (
                                        <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 text-center">
                                            {value.caption}
                                        </div>
                                    )}
                                </div>
                            );
                        },
                    }
                }}
            />
        </div>
    )
}

export const Author = ({author}: {author: any}) => {
    return (
        <div className="flex items-center gap-4">
              <img
                src={author?.image ? urlFor(author.image).url() : ''}
                alt={author?.name}
                width={40}
                height={40}
                className="rounded-full h-10 w-10 object-cover"
              />
              <div>
                <div className="font-medium dark:text-primary text-black">
                  {author?.name}
                </div>
                <div className="text-sm dark:text-secondary text-black">
                  {author?.role}
                </div>
              </div>
            </div>
    )
}