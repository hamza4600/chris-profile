import workData from '@/data/work.json';
import type { Metadata } from "next";
import { Header, MainImage, ProjectDetails, ChallengeAndResult, Process, Stack, Conclusion } from './_component';

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
    <div className="min-h-screen mx-auto">
    <Header title={caseStudyData.title} description={caseStudyData.description} />
    <MainImage image={caseStudyData.image} title={caseStudyData.title} />
    <div className="flex justify-center gap-8 p-8 max-w-[800px] mx-auto">
      <ProjectDetails location={caseStudyData.location} />
      <ChallengeAndResult challenge={caseStudyData.location.challenge} result={caseStudyData.location.result} />
    </div>
    <Process process={caseStudyData.process} />
    <Stack stack={caseStudyData.stack} />
    <Conclusion conclusion={caseStudyData.conclusion} />
  </div>
  );
};

export default Index;
