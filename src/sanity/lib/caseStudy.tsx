import { fetchSanityData } from "./client";

const query = `*[_type == "caseStudy" && showOnHomePage == true]{
    caseStudyCardData,
    slug
}`

export const getAllCaseStudies = async () => {
  const caseStudies = await fetchSanityData<[]>(query);
  return caseStudies;
};

const seoQuery = `*[_type == "caseStudy" && slug.current == $slug]{
    seo,
}[0]`

export const getCaseSeoBySlug = async (slug: string) => {
  const seoData = await fetchSanityData<[]>(seoQuery, { slug });
  return seoData;
};

const caseStudyDetailsQuery = `*[_type == "caseStudy" && slug.current == $slug]{
    heroSection,
    seo,
    content,
    videoUrl,
    image,
    slug,
    conclusion,
    duration,
    previewLink,
    otherCaseStudies[]->{
        caseStudyCardData,
        slug
    }
}[0]`

export const getCaseStudyDetailsBySlug = async (slug: string) => {
  const caseStudyDetails = await fetchSanityData<[]>(caseStudyDetailsQuery, { slug });
  return caseStudyDetails;
};
