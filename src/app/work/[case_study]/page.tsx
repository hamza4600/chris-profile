import workData from '@/data/work.json';
import type { Metadata } from "next";
import { Header, MainImage, ProjectDetails, ChallengeAndResult, Process, Stack, Conclusion } from './_component';
import { KeyFeatures, TechStack } from './_component/TechStack';
import Link from 'next/link';
import Button from '@/components/Atoms/Button';

function getCaseStudyData(caseStudyName: string) {
  return workData.work.find((item) => item.url === caseStudyName);
}

export async function generateMetadata(
  { params }: { params: { case_study: string } }
): Promise<Metadata> {
  const caseStudyData = getCaseStudyData(params.case_study);
  return {
    title: caseStudyData?.seo.title || 'Case Study',
    description: caseStudyData?.seo.description || 'A detailed case study of our work',
    keywords: caseStudyData?.seo.keywords || [],
    openGraph: {
      title: caseStudyData?.seo.title,
      description: caseStudyData?.seo.description,
      images: [{ url: caseStudyData?.seo.image || '' }],
    },
  };
}

const Index = (props: { params: { case_study: string } }) => {
  const caseStudyData = getCaseStudyData(props.params.case_study);

  if (!caseStudyData) {
    return <div>Case study not found</div>;
  }

  return (
    <div className="min-h-screen mx-auto max-w-[1080px] px-6 md:px-8 pt-8 sm:pt-16 mb-12">
      <Header title={caseStudyData.title} description={caseStudyData.description} />
      <MainImage image={caseStudyData.image} title={caseStudyData.title} />
      <div className="sm:mt-12 mt-8">
        {/* <ProjectDetails location={caseStudyData.location} /> */}
        <ChallengeAndResult challenge={caseStudyData.location.challenge} result={caseStudyData.location.result} />
      </div>
      <Process process={caseStudyData.process as any} />
      {/* <Stack stack={caseStudyData.stack} /> */}
      <TechStack stack={caseStudyData.stack as any} />
      {/* <KeyFeatures features={caseStudyData.key_features} /> */}
      <Conclusion conclusion={caseStudyData.conclusion} />
        <Link 
        href={caseStudyData.live_link as string} 
        target="_blank"
        >
          <Button size="medium" className=" font-medium">
            Preview Project
          </Button>
        </Link>
    </div>
  );
};

export default Index;

