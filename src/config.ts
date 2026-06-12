export const SITE = {
  website: "https://ganesh-macherla.github.io/astro-paper/",
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

  basePath: "/astro-paper",

  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/Ganesh-Macherla/astro-paper",
  },

  dynamicOgImage: true,

  dir: "ltr",
  lang: "en",
  timezone: "Asia/Kolkata",
} as const;