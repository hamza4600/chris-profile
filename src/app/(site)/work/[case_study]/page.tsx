import type { Metadata } from "next";
import { Header, MainImage, Conclusion } from './_component';
import Link from 'next/link';
import Button from '@/components/Atoms/Button';
import { getCaseSeoBySlug, getCaseStudyDetailsBySlug } from '@/sanity/lib/caseStudy';
import { urlFor } from '@/sanity/lib/image';
import RichText from './_component/RichText';
import { redirect } from 'next/navigation';
import OtherCaseStudies from './_component/OtherCaseStudies';
import { generateCaseStudySchema } from "@/components/Schema";
import { authorSchema, organizationSchema } from "@/components/Schema";
import SchemaOrg from "@/components/Schema/SchemaOrg";

interface SeoData {
  seo: {
    title: string;
    description: string;
    keyword: string;
    image: string;
  };
}

// revalidate 60
// export const revalidate = 600;
export async function generateMetadata(
  { params }: { params: { case_study: string } }
): Promise<Metadata> {

  const caseStudyData: any | SeoData = await getCaseSeoBySlug(params.case_study);

  return {
    title: caseStudyData?.seo.title || 'Case Study',
    description: caseStudyData?.seo.description || 'A detailed case study of our work',
    keywords: caseStudyData?.seo.keyword || '',
    openGraph: {
      title: caseStudyData?.seo.title || 'Case Study',
      description: caseStudyData?.seo.description || 'A detailed case study of our work',
      images: [{ url: caseStudyData?.seo.image ? urlFor(caseStudyData.seo.image).url() : '' }],
    },
  };
}

const CaseStudyPage = async (props: { params: { case_study: string } }) => {

  const data: any = await getCaseStudyDetailsBySlug(props.params.case_study);
  const { heroSection, content, image, conclusion, duration, previewLink, otherCaseStudies , seo} = data;

  // Generate schemas
  const schemas = [
    generateCaseStudySchema(data),
    authorSchema,
    // organizationSchema
  ]

  // if no slug return to home page
  if (!props.params.case_study) {
    return redirect('/');
  }

  if (!data) {
    return <div>Case study not found</div>;
  }

  const imgUrl = heroSection.image ? urlFor(heroSection.image)?.url() : '';

  return (
    <div className="min-h-screen mx-auto max-w-7xl px-6 md:px-8 pt-8 sm:pt-16 mb-12">
      <SchemaOrg schemas={schemas} />
      {
        heroSection && (
          <Header title={heroSection.title} description={heroSection.description} />
        )
      }
      {
        imgUrl && (
          <MainImage image={imgUrl} title={heroSection.alt} />
        )
      }
      {
        content && (
          <RichText content={content} />
        )
      }
      {
        conclusion && (
          <Conclusion conclusion={conclusion} />
        )
      }
      {
        previewLink && (
          <Link
            href={previewLink as string}
            target="_blank"
          >
            <Button size="medium" className=" font-medium">
              Preview Project
            </Button>
          </Link>
        )
      }
      {
        otherCaseStudies && (
          <OtherCaseStudies otherCaseStudies={otherCaseStudies} />
        )
      }
    </div>
  );
};

export default CaseStudyPage;