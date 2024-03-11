import { defineType, defineField } from "sanity";
import { SlCallOut } from "react-icons/sl";

export default defineType({
  name: "callout",
  type: "object",
  title: "Callout",
  icon: <SlCallOut />,
  fields: [
    defineField({
      name: "intro",
      type: "text",
      title: "Optional Intro",
    }),
    defineField({
      title: "CTA One URL",
      name: "url1",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    }),
    defineField({
      title: "CTA One Text",
      name: "cta1",
      type: "string",
    }),
    defineField({
      title: "CTA Two URL",
      name: "url2",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    }),
    defineField({
      title: "CTA OneTwo Text",
      name: "cta2",
      type: "string",
    }),
  ],
});
