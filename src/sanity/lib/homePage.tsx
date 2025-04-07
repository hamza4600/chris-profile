import { fetchSanityData } from "./client";
import { groq } from 'next-sanity';

export interface HomePageData {
  heroSection: {
    heading: string;
    subheading: string;
    heroImage: {
      asset: {
        url: string;
      };
    };
  };
  caseStudiesSection: {
    sectionTitle: string;
    featuredCaseStudies: Array<{
      _id: string;
      title: string;
      slug: string;
      caseStudyCardData: any;
    }>;
  };
  skillsSection: {
    sectionTitle: string;
    skills: Array<{
      skillName: string;
      proficiencyLevel: number;
    }>;
  };
  experienceSection: {
    sectionTitle: string;
    experiences: Array<{
      companyName: string;
      position: string;
      duration: string;
      description: string;
    }>;
  };
  faqSection: {
    sectionTitle: string;
    faqItems: Array<{
      question: string;
      answer: string;
    }>;
  };
  blogsSection: {
    sectionTitle: string;
    blogs: Array<{
      _id: string;
      cardData: any;
      title: string;
      slug: string;
    }>;
  };

}

const homePageQuery = groq`
  *[_type == "homePage"][0] {
    seo,
    heroSection {
      heading,
      subheading,
      heroImage {
        asset-> {
          url
        }
      }
    },
    caseStudiesSection {
      sectionTitle,
      featuredCaseStudies[]-> {
        _id,
        title,
        slug,
        showOnHomePage,
        caseStudyCardData,
      }
    },
    skillsSection {
      sectionTitle,
      skills[] {
        skillName,
        proficiencyLevel
      }
    },
    experienceSection {
      sectionTitle,
      experiences[] {
        companyName,
        position,
        duration,
        description
      }
    },
    faqSection {
      sectionTitle,
      faqItems[] {
        question,
        answer
      }
    },
    blogsSection {
      sectionTitle,
      blogs[]-> {
        _id,
        cardData,
        title,
        slug
      }
    }
  }
`;


export async function getHomePageData(): Promise<HomePageData> {
  try {
    const data = await fetchSanityData<HomePageData>(homePageQuery);
    
    if (!data) {
      throw new Error('No home page data found');
    }

    return data;
  } catch (error) {
    console.error('Error fetching home page data:', error);
    throw error;
  }
}

const homePageSeoQuery = groq`
  *[_type == "homePage"][0] {
    seo
  }
`;
interface HomePageSeoData {
    seo: {
        metaTitle: string;
        metaDescription: string;
        ogImage: {
          asset: {
            url: string;
          };
        };
        keywords: string[];
      };
}

export async function getHomePageSeoData(): Promise<HomePageSeoData> {
  try {
    const data = await fetchSanityData<HomePageSeoData>(homePageSeoQuery);
    return data;
  } catch (error) {
    console.error('Error fetching home page seo data:', error);
    throw error;
  }
}