import { client } from '@/sanity/lib/client';
import RSS from 'rss';

const baseUrl = 'https://hamza-v2.vercel.app'
const feed = new RSS({
    title: 'Hamza Khan | Full Stack Developer & Designer',
    description: 'A cool website that everyone should check out !',
    site_url: baseUrl,
    feed_url: `${baseUrl}/feed.xml`,
    copyright: `${new Date().getFullYear()} Hamza Khan | Full Stack Developer & Designer (hamza4600)`,
    language: 'en',
    pubDate: new Date(),
    custom_namespaces: {
        'atom': 'http://www.w3.org/2005/Atom'
    }
});

// get case studies 
async function getCaseStudies() {   
    const query = `*[_type == "caseStudy"] {
        heroSection,
        slug,
        _updatedAt
    }`
    return await client.fetch(query)
}
export async function GET() {
    const caseStudies = await getCaseStudies()

    caseStudies.forEach((caseStudy: any) => {
        feed.item({
            title: caseStudy.heroSection.title,
            description: caseStudy.heroSection.description,
            url: `${baseUrl}/work/${caseStudy.slug.current}`,
            date: new Date(caseStudy._updatedAt),   
        })
    })
    


    return new Response(feed.xml({ indent: true }), {
        headers: {
           "Content-Type": "text/xml"  // Changed from application/atom+xml
        },
    });
}