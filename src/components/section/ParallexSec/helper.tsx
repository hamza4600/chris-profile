export interface Metric {
    title: string;
    description: string;
  }
  
  export interface ImageAsset {
    _ref: string;
    _type: string;
  }
  
  export interface Image {
    _type: string;
    asset: ImageAsset;
  }
  
  export interface CaseStudyCardData {
    title: string;
    subtitle: string;
    description: string;
    image: Image;
    metrics: Metric[];
    tags: string[];
  }
  
  export interface Slug {
    current: string;
    _type: string;
  }
  
  export interface CaseStudy {
    caseStudyCardData: CaseStudyCardData;
    slug: Slug;
  }