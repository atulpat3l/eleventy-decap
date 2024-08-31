module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("**/*.yml");

  return {
    dir: {
      input: "src",
    },
  };
};
