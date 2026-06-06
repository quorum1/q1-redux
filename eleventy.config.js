import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";
import EleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyVitePlugin);
  eleventyConfig.addPlugin(EleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy("src/assets");

  // Filters for cross-referencing collections by key
  eleventyConfig.addFilter("findByKey", (collection, key) =>
    Array.isArray(collection) ? (collection.find(i => i.key === key) || null) : null
  );
  eleventyConfig.addFilter("filterByKeys", (collection, keys) =>
    Array.isArray(collection) && Array.isArray(keys)
      ? collection.filter(i => keys.includes(i.key))
      : []
  );
  eleventyConfig.addFilter("filterByType", (collection, type) =>
    Array.isArray(collection) ? collection.filter(i => i.type === type) : []
  );
  eleventyConfig.addFilter("published", (collection) =>
    Array.isArray(collection) ? collection.filter(i => i.status === "published" || i.status === "active" || i.status === "completed") : []
  );
  eleventyConfig.addFilter("costRange", (min, max, currency = "USD") => {
    const fmt = n => n >= 1000 ? `$${(n/1000).toFixed(0)}K` : `$${n}`;
    return `${fmt(min)}–${fmt(max)} ${currency}`;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
