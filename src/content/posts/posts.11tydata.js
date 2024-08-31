module.exports = {
  permalink: function ({ title }) {
    return `/post/${this.slugify(title)}/index.html`;
  },
  layout: "layout.njk",
};
