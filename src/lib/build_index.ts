import { sortedBlogPosts, blogInfo } from "../routes/(marketing)/blog/posts";
import Fuse from "fuse.js";

// Manually define other pages to be included in the search
const otherPages = [
    {
        title: "Home",
        description: "The open source, fast, and free to host SaaS template.",
        path: "/"
    },
    {
        title: "Pricing",
        description: "Pricing plans for our services.",
        path: "/pricing"
    },
    {
        title: "Contact Us",
        description: "Get in touch with us for demos, quotes, or questions.",
        path: "/contact_us"
    }
];

export async function buildSearchIndex() {
  const indexData = [
    ...sortedBlogPosts.map(post => ({
      title: post.title,
      description: post.description,
      body: '', // Body is not available from source, but title/desc are primary
      path: post.link
    })),
    ...otherPages.map(page => ({
      title: page.title,
      description: page.description,
      body: '',
      path: page.path
    }))
  ];

  const index = Fuse.createIndex(["title", "description"], indexData);
  const jsonIndex = index.toJSON();
  const data = { index: jsonIndex, indexData, buildTime: Date.now() };
  return data;
}