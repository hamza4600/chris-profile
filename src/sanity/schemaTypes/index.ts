import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import { caseStudyType } from './caseStudy'
import { seoType } from './SEO'
import { caseStudyCardDataType } from './caseStudyCardData'
import { homePageType } from './Home/homePage'
import { faqItemType } from './Home/Faq'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, caseStudyType, seoType, caseStudyCardDataType, homePageType, faqItemType],
}
