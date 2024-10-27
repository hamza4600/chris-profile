import { defineField, defineType } from "sanity";

export const seoType = defineType({
    name: "seo",
    title: "SEO",
    description: "SEO for the case study",
    type: "object",
    fieldsets: [
        {
            name: "seoFields",
            title: "SEO Fields",
            options: { collapsible: true, collapsed: true },
        },
    ],
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            fieldset: "seoFields",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "description",
            title: "Description",
            type: "text",
            fieldset: "seoFields",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "keyword",
            title: "Keywords",
            type: "string",
            fieldset: "seoFields",
            validation: (Rule) => Rule.required(),
        },
        { name: "image", title: "Image", type: "image", fieldset: "seoFields" },
    ],
});
