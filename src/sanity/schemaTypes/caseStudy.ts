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
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
        },
        // card data that include title , decription , tags , image
        {
            name: "caseStudyCardData",
            title: "Case Study Card Data",
            type: "caseStudyCardData",
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
                },
                {
                    name: "description",
                    title: "Description",
                    type: "text",
                },
                {
                    name: "image",
                    title: "Image",
                    type: "image",
                },
                {
                    name: "alt",
                    title: "Alt",
                    type: "string",
                },
            ],
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
        },
        {
            name: "duration",
            title: "Duration",
            type: "string",
        },
        {
            name: "previewLink",
            title: "Preview Link",
            type: "url",
        },
    ],
});
