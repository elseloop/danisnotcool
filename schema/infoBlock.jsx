import { defineType, defineField } from "sanity";
import { FaCircleInfo } from "react-icons/fa6";

export default defineType({
  name: "infoBlock",
  type: "object",
  title: "Info Block",
  icon: <FaCircleInfo />,
  fields: [
    defineField({
      title: "Emoji",
      name: "emoji",
      type: "string",
      options: {
        list: [
          { title: "⚠️", value: "⚠️" },
          { title: "✍️", value: "✍️" },
          { title: "🔍", value: "🔍" },
          { title: "🛑", value: "🛑" },
          { title: "🚨", value: "🚨" },
          { title: "👩‍💻", value: "👩‍💻" },
        ],
      },
    }),
    defineField({
      title: "Content",
      name: "body",
      type: "text",
    }),
  ],
});
