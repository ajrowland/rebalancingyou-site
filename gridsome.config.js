// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require("path");

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/assets/styles.scss")],
    });
}

module.exports = {
  siteName: "Rebalancing You",
  siteDescription:
    "ENERGISE, RESTORE, NOURISH. I'm studying with the renowned Institute for Optimum Nutrition and will qualify next year. Until then, this is a place to inspire and share healthful information, tips, tricks and recipes. I hope to energise, restore and nourish your body mind and soul!",
  siteUrl: "https://www.rebalancingyou.com",
  templates: {
    Article: [
      {
        path: "/article/:title",
        component: "./src/templates/Article.vue",
      },
    ],
    Recipe: [
      {
        path: "/recipe/:title",
        component: "./src/templates/Recipe.vue",
      },
    ],
  },
  plugins: [
    {
      use: "@zefman/gridsome-source-instagram",
      options: {
        username: "rebalancingyou",
        typeName: "InstagramPhoto",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Article",
        baseDir: "./content/articles",
        pathPrefix: "/articles",
        path: "*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Recipe",
        baseDir: "./content/recipes",
        pathPrefix: "/recipes",
        path: "*.md",
      },
    },
    {
      use: "gridsome-plugin-gtm",
      options: {
        id: "GTM-T5T8WRW",
        enabled: true,
        debug: true,
      },
    },
  ],
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      plugins: ["remark-attr"],
    },
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: "$env: " + process.env.NODE_ENV + ";",
      },
    },
  },
  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ["vue-modules", "vue", "normal-modules", "normal"];

    types.forEach((type) => {
      addStyleResource(config.module.rule("scss").oneOf(type));
    });
  },
};
