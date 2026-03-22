export const SITE = {
  website: "http://localhost:4321",
  author: "段清衡",
  profile: "https://github.com/SicOverflow",
  desc: "一个记录技术学习、项目实践与个人思考的博客。",
  title: "Devosfera",
  ogImage: "devosfera-og.webp", // ubicado en la carpeta public
  lightAndDarkMode: true,
  postPerIndex: 6,
  postPerPage: 8,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showGalleries: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "编辑这篇文章",
    url: "https://github.com/0xdres/astro-devosfera/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "zh-CN", // html lang code. Set this empty and default will be "en"
  timezone: "America/Guatemala", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  introAudio: {
    enabled: true, // mostrar/ocultar el reproductor en el hero
    src: "/audio/intro-web.mp3", // ruta al archivo (relativa a /public)
    label: "氛围乐", // etiqueta display en el reproductor
    duration: 30, // duración en segundos (para la barra de progreso fija)
  },
} as const;
