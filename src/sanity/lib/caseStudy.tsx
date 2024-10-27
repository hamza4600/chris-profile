// get all case studies
import { fetchSanityData } from "./client";

export const getAllCaseStudies = async () => {
  const caseStudies = await fetchSanityData<[]>('*[_type == "caseStudy"]');
  return caseStudies;
};

