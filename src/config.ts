export const SITE = {
  website: "https://ganesh-macherla.github.io/portfolio-blogsite/",
  author: "Ganesh Macherla",
  profile: "https://github.com/Ganesh-Macherla",
  desc: "My safe space",
  title: "Machu's Archives",
  ogImage: "astropaper-og.jpg",

  lightAndDarkMode: true,

  postPerIndex: 4,
  postPerPage: 4,

  scheduledPostMargin: 15 * 60 * 1000,

  showArchives: false,
  showBackButton: true,

  basePath: "/portfolio-blogsite",

  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/Ganesh-Macherla/portfolio-blogsite",
  },

  dynamicOgImage: true,

  dir: "ltr",
  lang: "en",
  timezone: "Asia/Kolkata",
} as const;
