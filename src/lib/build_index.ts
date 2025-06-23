import { allProducts } from "$lib/data/products";
import Fuse from "fuse.js";

// Manually define other pages to be included in the search
const otherPages = [
    {
        title: "Home",
        description: "The open source, fast, and free to host SaaS template.",
        path: "/"
    },
    {
        title: "Documentation",
        description: "Setup guides, READMEs, and technical documentation for Signal Lynx products.",
        path: "/docs"
    },
    {
        title: "Contact Us",
        description: "Get in touch with us for demos, quotes, or questions.",
        path: "/contact_us"
    }
];

export async function buildSearchIndex() {
  const indexData = [
    ...allProducts.map(product => ({
      title: product.title,
      description: product.tagline,
      body: product.features.join(' '), // Combine features for better searchability
      path: product.id === 'license-hub' ? '/license-hub' : '/trading-automation'
    })),
    ...otherPages.map(page => ({
      title: page.title,
      description: page.description,
      body: '',
      path: page.path
    }))
  ];

  const index = Fuse.createIndex(["title", "description", "body"], indexData);
  const jsonIndex = index.toJSON();
  const data = { index: jsonIndex, indexData, buildTime: Date.now() };
  return data;
}