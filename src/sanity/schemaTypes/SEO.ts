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
        },
        {
            name: "description",
            title: "Description",
            type: "text",
            fieldset: "seoFields",
        },
        {
            name: "keywords",
            title: "Keywords",
            type: "string",
            fieldset: "seoFields",
        },
        { name: "image", title: "Image", type: "image", fieldset: "seoFields" },
    ],
});
