module.exports = {
  permalink: function ({ title }) {
    return `/post/${this.slugify(title)}`;
  },
  layout: "layout.njk",
};
