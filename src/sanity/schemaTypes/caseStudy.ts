import { FilterIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const caseStudyType = defineType({
    name: "caseStudy",
    title: "Case Study",
    type: "document",
    icon: FilterIcon,
    fields: [
        {
            name: "seo",
            title: "SEO",
            type: "seo",
        },
        // show onHome page
        {
            name: "showOnHomePage",
            title: "Show on Home Page",
            type: "boolean",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        },
        // card data that include title , decription , tags , image
        {
            name: "caseStudyCardData",
            title: "Case Study Card Data",
            type: "caseStudyCardData",
            description: "This is the data that will be used to display on the case study card",
        },
        // hero section that have title , decription , image
        {
            name: "heroSection",
            title: "Hero Section",
            type: "object",
            fields: [
                {
                    name: "title",
                    title: "Title",
                    type: "string",
                    validation: (Rule) => Rule.required(),
                },
                {
                    name: "description",
                    title: "Description",
                    type: "text",
                    validation: (Rule) => Rule.required(),
                },
                {
                    name: "image",
                    title: "Image",
                    type: "image",
                    validation: (Rule) => Rule.required(),
                },
                {
                    name: "alt",
                    title: "Alt",
                    type: "string",
                    validation: (Rule) => Rule.required(),
                },
            ],
        },
        //viedo Url 
        {
            name: "videoUrl",
            description: "Video Url for the case study",
            title: "Video Url",
            type: "url",
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            description: "Image for the case study",
            options: {
                hotspot: true,
            },
        },
        {
            name: "conclusion",
            title: "Conclusion",
            type: "text",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "duration",
            title: "Duration",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "previewLink",
            title: "Preview Link",
            type: "url",
        },
        // other Case Studies
        {
            name: "otherCaseStudies",
            title: "Other Case Studies",
            type: "array",
            of: [{ type: "reference", to: [{ type: "caseStudy" }] }],
        },
        // related posts
        {
            name: "relatedPosts",
            title: "Related Posts",
            type: "array",
            of: [{ type: "reference", to: [{ type: "post" }] }],
        },
    ],
    preview: {
        select: {
            title: "caseStudyCardData.title",
        },
    },
});
