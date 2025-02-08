import { getAllCaseStudies } from '@/sanity/lib/caseStudy'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

interface CaseStudy {
  caseStudyCardData: {
    title: string
    subtitle: string
    description: string
    tags: string[]
    image: any
    metrics: any[]
  }
  slug: {
    current: string
  }
}


export default async function CaseStudiesPage() {
  const caseStudies = await getAllCaseStudies()

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-4xl font-bold mb-8 text-center dark:text-primary text-black font-heading">Case Studies</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study: CaseStudy) => (
          <Link 
            href={`/work/${study.slug.current}`} 
            key={study.slug.current}
            className="group hover:scale-105 transition-transform duration-200"
          >
            <article className="bg-card rounded-lg overflow-hidden shadow-lg dark:bg-gradient-to-b dark:from-[#091319] dark:to-[#0F0F0F] bg-[#fbfbfb] text-white dark:text-white border dark:border-white/[0.14] border-gray-200">
              {study.caseStudyCardData.image && (
                <div className="relative h-60 w-full">
                  <Image
                    src={urlFor(study.caseStudyCardData.image).url()}
                    alt={study.caseStudyCardData.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="mb-2">
                  <h2 className="text-xl font-semibold dark:text-white text-black">
                    {study.caseStudyCardData.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground dark:text-secondary text-black border dark:border-white/[0.14] border-gray-200 w-fit rounded-full px-3 py-1">
                    {study.caseStudyCardData.subtitle}
                  </p>
                </div>

                <p className="text-muted-foreground line-clamp-2 dark:text-secondary text-black">
                  {study.caseStudyCardData.description}
                </p>
                
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  )
}