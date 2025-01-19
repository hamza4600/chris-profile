import { urlFor } from '@/sanity/lib/image';
import { PortableText, PortableTextBlock, PortableTextComponentProps, PortableTextMarkComponentProps } from '@portabletext/react'

export const MainBlogContent = ({ blogPost }: { blogPost: any }) => {
    return (
        <div className="prose prose-lg max-w-none dark:prose-invert">
            <PortableText
                value={blogPost?.body}
                components={{
                    block: {
                        normal: ({ value, children }: PortableTextComponentProps<PortableTextBlock>) => (
                            <p className="mb-4 text-zinc-900 dark:text-zinc-100 leading-relaxed">
                                {children}
                            </p>
                        ),
                        h1: ({ value, children }: PortableTextComponentProps<PortableTextBlock>) => (
                            <h1 className="md:text-[38px] leading-[1.2em] tracking-[-0.7px] font-normal text-[30px] text-zinc-900 dark:text-zinc-100 mb-6">
                                {children}
                            </h1>
                        ),
                        h2: ({ value, children }: PortableTextComponentProps<PortableTextBlock>) => (
                            <h2 className="text-2xl font-normal mb-4 text-zinc-900 dark:text-zinc-100">
                                {children}
                            </h2>
                        ),
                        h3: ({ value, children }: PortableTextComponentProps<PortableTextBlock>) => (
                            <h3 className="text-xl font-normal mb-3 text-zinc-900 dark:text-zinc-100">
                                {children}
                            </h3>
                        ),
                        h4: ({ value, children }: PortableTextComponentProps<PortableTextBlock>) => (
                            <h4 className="text-lg font-normal mb-2 text-zinc-900 dark:text-zinc-100">
                                {children}
                            </h4>
                        ),
                        blockquote: ({ value, children }: PortableTextComponentProps<PortableTextBlock>) => (
                            <blockquote className="border-l-4 border-blue-500 pl-4 py-1 my-6 italic text-zinc-800 dark:text-zinc-200">
                                {children}
                            </blockquote>
                        ),
                        list: ({ value, children }: PortableTextComponentProps<PortableTextBlock>) => {
                            const listStyle = value.listItem === 'number' ? 'list-decimal' : 'list-disc';
                            return (
                                <ul className={`mb-6 ${listStyle} pl-6 space-y-2 text-zinc-900 dark:text-zinc-100`}>
                                    {children}
                                </ul>
                            );
                        },
                        listItem: ({ value, children }: PortableTextComponentProps<PortableTextBlock>) => (
                            <li className="mb-2 text-zinc-900 dark:text-zinc-100">
                                {children}
                            </li>
                        ),
                    },
                    marks: {
                        link: ({ children, value }: PortableTextMarkComponentProps<any>) => (
                            <a href={value?.href} className="text-blue-500 hover:underline">
                                {children}
                            </a>
                        ),
                        strong: ({ children }: { children: React.ReactNode }) => (
                            <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
                                {children}
                            </strong>
                        ),
                        em: ({ children }: { children: React.ReactNode }) => (
                            <em className="italic text-zinc-900 dark:text-zinc-100">
                                {children}
                            </em>
                        ),
                        code: ({ children }: { children: React.ReactNode }) => (
                            <code className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-900 dark:text-zinc-100">
                                {children}
                            </code>
                        ),
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