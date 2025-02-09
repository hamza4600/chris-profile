import { defineType } from "sanity";

export const homePageType = defineType({
    name: "homePage",
    title: "Home Page",
    type: "document",
    fields: [
        // Hero Section
        // seo 
        {
            name: "seo",
            title: "SEO",
            type: "seo",
        },
        {
            name: "heroSection",
            title: "Hero Section",
            type: "object",
            fields: [
                {
                    name: "heading",
                    title: "Heading",
                    type: "string",
                },
                {
                    name: "subheading",
                    title: "Sub Heading",
                    type: "text",
                },
                {
                    name: "heroImage",
                    title: "Hero Image",
                    type: "image",
                    options: {
                        hotspot: true,
                    },
                },
            ],
        },

        // Case Studies Section
        {
            name: "caseStudiesSection",
            title: "Case Studies Section",
            type: "object",
            fields: [
                {
                    name: "sectionTitle",
                    title: "Section Title",
                    type: "string",
                },
                {
                    name: "featuredCaseStudies",
                    title: "Featured Case Studies",
                    type: "array",
                    of: [
                        {
                            type: "reference",
                            to: [{ type: "caseStudy" }],
                        },
                    ],
                    validation: (Rule) => Rule.unique(),
                    options: {
                        sortable: true, // This allows drag and drop reordering
                    },
                },
            ],
        },

        // Skills Section
        // {
        //     name: "skillsSection",
        //     title: "Skills Section",
        //     type: "object",
        //     fields: [
        //         {
        //             name: "sectionTitle",
        //             title: "Section Title",
        //             type: "string",
        //         },
        //         {
        //             name: "skills",
        //             title: "Skills",
        //             type: "array",
        //             of: [
        //                 {
        //                     type: "object",
        //                     fields: [
        //                         {
        //                             name: "skillName",
        //                             title: "Skill Name",
        //                             type: "string",
        //                         },
        //                         {
        //                             name: "proficiencyLevel",
        //                             title: "Proficiency Level",
        //                             type: "number",
        //                             validation: (Rule) => Rule.min(0).max(100),
        //                         },
        //                     ],
        //                 },
        //             ],
        //         },
        //     ],
        // },

        // Experience Section
        // {
        //     name: "experienceSection",
        //     title: "Experience Section",
        //     type: "object",
        //     fields: [
        //         {
        //             name: "sectionTitle",
        //             title: "Section Title",
        //             type: "string",
        //         },
        //         {
        //             name: "experiences",
        //             title: "Experiences",
        //             type: "array",
        //             of: [
        //                 {
        //                     type: "object",
        //                     fields: [
        //                         {
        //                             name: "companyName",
        //                             title: "Company Name",
        //                             type: "string",
        //                         },
        //                         {
        //                             name: "position",
        //                             title: "Position",
        //                             type: "string",
        //                         },
        //                         {
        //                             name: "duration",
        //                             title: "Duration",
        //                             type: "string",
        //                         },
        //                         {
        //                             name: "description",
        //                             title: "Description",
        //                             type: "text",
        //                         },
        //                     ],
        //                 },
        //             ],
        //         },
        //     ],
        // },
        // FAQ Section
        {
            name: "faqSection",
            title: "FAQ Section",
            type: "object",
            fields: [
                {
                    name: "sectionTitle",
                    title: "Section Title",
                    type: "string",
                },
                {
                    name: "faqItems",
                    title: "FAQ Items",
                    type: "array",
                    of: [{ type: "faqItem" }],
                },
            ],
        },
        // Blogs Posts Seection we will select 3 blogs posts
        {
            name: "blogsSection",
            title: "Blogs Section",
            type: "object",
            description: "Select 3 blogs posts",
            fields: [
                {
                    name: "sectionTitle",
                    title: "Section Title",
                    type: "string",
                },
                {
                    name: "blogs",
                    title: "Blogs",
                    type: "array",
                    of: [{ type: "reference", to: [{ type: "post" }] }],
                    validation: (Rule) => Rule.max(3),
                },
            ],
        },

    ],
    preview: {
        select: {
            heading: "seo.title",
        },
    },
});
