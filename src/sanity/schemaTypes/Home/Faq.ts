import { defineType } from "sanity";

// FAQ Item
export const faqItemType = defineType({
    name: "faqItem",
    title: "FAQ Item",
    type: "object",
    fields: [
        {
            name: "question",
            title: "Question",
            type: "string",
        },
        {
            name: "answer",
            title: "Answer",
            type: "text",
        },
    ],
});
