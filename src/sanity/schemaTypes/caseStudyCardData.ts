import { defineField, defineType } from "sanity";

export const caseStudyCardDataType = defineType({
    name: "caseStudyCardData",
    title: "Case Study Card Data",
    type: "object",
    fields: [
        {
            name: "subtitle",
            title: "Subtitle",
            description: "what is Industry",
            type: "string",
        },
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
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "string" }],
        },
        {
            name: "image",
            title: "Image",
            type: "image",
        },
        // metrics is array of object
        {
            name: "metrics",
            title: "Metrics",
            type: "array",
            of: [
              {
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
                    type: "string",
                  },
                ],
              },
            ],
            description: "Metrics is an array of objects",
          },
    ],
});
