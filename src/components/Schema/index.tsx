import { urlFor } from '@/sanity/lib/image'
import { Person, WithContext, Organization, WebSite, Article } from 'schema-dts'
import { domainURL } from "@/constants";

export const baseUrl = domainURL

// Base organization schema
export const organizationSchema: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
    name: 'Chris Castanuela',
  url: baseUrl,
  logo: `${baseUrl}/icon.png`,
  sameAs: [
    'https://github.com/Chriscastanuela',
    'https://www.linkedin.com/in/christopher-castanuela/'
  ]
}

// Author schema
export const authorSchema: WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Chris Castanuela',
  jobTitle: 'Full Stack Developer & AI Developer Shopify Expert ',
  url: baseUrl,
  image: `${baseUrl}/hamza.jpg`,
  sameAs: [
    'https://github.com/Chriscastanuela',
    'https://www.linkedin.com/in/christopher-castanuela/'
  ],
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
            'https://github.com/Chriscastanuela',
            'https://www.linkedin.com/in/christopher-castanuela/'
        ]
    }
}