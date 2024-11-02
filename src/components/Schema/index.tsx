import { urlFor } from '@/sanity/lib/image'
import { Person, WithContext, Organization, WebSite, Article } from 'schema-dts'

export const baseUrl = 'https://hamza-v2.vercel.app'

// Base organization schema
export const organizationSchema: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Hamza Khan',
  url: baseUrl,
  logo: `${baseUrl}/icon.png`,
  sameAs: [
    'https://github.com/hamza4600',
    'https://www.linkedin.com/in/hamza-khan-tanoli-845099205/'
  ]
}

// Author schema
export const authorSchema: WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Hamza Khan',
  jobTitle: 'Frontend Developer',
  url: baseUrl,
  image: `${baseUrl}/hamza.jpg`,
  sameAs: [
    'https://github.com/hamza4600',
    'https://www.linkedin.com/in/hamza-khan-tanoli-845099205/'
  ]
}

// Generate case study schema

export function generateCaseStudySchema(caseStudy: any): WithContext<Article> {
    
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: caseStudy.seo.title,
    description: caseStudy.seo.description,
    image: caseStudy.seo.image ? urlFor(caseStudy.seo.image).url() : '',
    datePublished: caseStudy._createdAt,
    dateModified: caseStudy._updatedAt,
    author: authorSchema,
    publisher: organizationSchema,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/work/${caseStudy.slug.current}`
    }
  }
}

// Home Page Schema 
export function generateHomePageSchema(homePage: any): WithContext<WebSite> {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: homePage.seo.title,
        url: baseUrl,
        image: homePage.seo.image ? urlFor(homePage.seo.image).url() : '',
        description: homePage.seo.description,
        author: authorSchema,
        publisher: organizationSchema,
        sameAs: [
            'https://github.com/hamza4600',
            'https://www.linkedin.com/in/hamza-khan-tanoli-845099205/'
        ]
    }
}