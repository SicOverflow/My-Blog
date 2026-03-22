import { getRelativeLocaleUrl } from "astro:i18n";

export const SUPPORTED_LANGS = ["zh", "en"] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];
export const DEFAULT_LANG: Lang = "zh";

export const language = {
  zh: "中文",
  en: "English",
} as const;

export const ui = {
  zh: {
    posts: "文章",
    home: "首页",
    tags: "标签",
    about: "关于",
    search: "搜索",
    featured: "精选",
    recent: "最近",
    intro: "这里是我的个人博客，记录技术、设计与思考。",
    writtenBy: "作者",
    switchLabel: "EN",
    skipToContent: "跳转到正文",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    archives: "归档",
    galleries: "画廊",
    searchShortcut: "搜索 (⌘K)",
    openSearch: "打开搜索",
    close: "关闭",
    open: "打开",
    browseNavigate: "浏览 / 导航",
    searchInSite: "站内搜索",
    searchHint: "输入以搜索文章、教程或灵感...",
    poweredBy: "技术支持",
    followMe: "关注我",
    allRightsReserved: "保留所有权利。",
    madeWithLoveCoffee: "用大量爱和咖啡制作",
    darkMode: "深色模式",
    lightMode: "浅色模式",
    toggleTheme: "切换主题",
    browseAllPosts: "浏览全部文章",
    updates: "动态",
    searchPageTitle: "搜索",
    searchPageDesc: "搜索博客中的文章、教程和想法。",
    tagsPageTitle: "标签",
    tagsPageDesc: "探索博客中的所有主题。",
    tagUnit: "个标签",
    yearUnitSingle: "年",
    yearUnitPlural: "年",
    archivesPageTitle: "归档",
    archivesPageDesc: "回顾我发布的全部内容，记录时间轨迹。",
    postsPageTitle: "文章",
    postsPageDesc: "我发布的全部文章。",
    galleriesPageTitle: "画廊",
    galleriesPageDesc: "通过图像集合分享瞬间与项目。",
    galleryUnitSingle: "个画廊",
    galleryUnitPlural: "个画廊",
    noGalleriesYet: "还没有发布任何画廊。",
    imageUnitSingle: "张图片",
    imageUnitPlural: "张图片",
    photoUnitSingle: "张照片",
    photoUnitPlural: "张照片",
    galleryNoImagesYet: "这个画廊暂时还没有图片。",
    imagesOfPrefix: "图片来自",
    viewImagePrefix: "查看图片：",
    imageViewer: "图片查看器",
    previous: "上一张",
    next: "下一张",
    pageIndicator: "第",
    pageSuffix: "页",
    noPostsYet: "还没有文章",
    noPostsDesc: "稍后再来，看看接下来发布的新内容。",
    devModeWarningTitle: "开发模式提示",
    buildFirstHint: "请先执行 pnpm run build 以生成搜索索引。",
    postUnitSingle: "篇文章",
    postUnitPlural: "篇文章",
    notFoundPageTitle: "404 页面未找到",
    notFoundMessage: "页面未找到",
    backToHome: "返回首页",
  },
  en: {
    posts: "Posts",
    home: "Home",
    tags: "Tags",
    about: "About",
    search: "Search",
    featured: "Featured",
    recent: "Recent",
    intro: "This is my personal blog about tech, design, and ideas.",
    writtenBy: "Written by",
    switchLabel: "中文",
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    archives: "Archives",
    galleries: "Galleries",
    searchShortcut: "Search (⌘K)",
    openSearch: "Open search",
    close: "Close",
    open: "Open",
    browseNavigate: "Browse / Navigate",
    searchInSite: "Search in site",
    searchHint: "Type to search posts, tutorials, or ideas...",
    poweredBy: "powered by",
    followMe: "Follow me",
    allRightsReserved: "All rights reserved.",
    madeWithLoveCoffee: "Made with lots of love and coffee",
    darkMode: "Dark mode",
    lightMode: "Light mode",
    toggleTheme: "Toggle theme",
    browseAllPosts: "Browse all posts",
    updates: "Updates",
    searchPageTitle: "Search",
    searchPageDesc: "Find any post, tutorial, or idea on the blog.",
    tagsPageTitle: "Tags",
    tagsPageDesc: "Explore all topics in the blog.",
    tagUnit: "tags",
    yearUnitSingle: "year",
    yearUnitPlural: "years",
    archivesPageTitle: "Archives",
    archivesPageDesc: "Review everything I have published over time.",
    postsPageTitle: "Posts",
    postsPageDesc: "All the posts I have published.",
    galleriesPageTitle: "Galleries",
    galleriesPageDesc: "Image collections to share moments and projects.",
    galleryUnitSingle: "gallery",
    galleryUnitPlural: "galleries",
    noGalleriesYet: "No galleries have been published yet.",
    imageUnitSingle: "image",
    imageUnitPlural: "images",
    photoUnitSingle: "photo",
    photoUnitPlural: "photos",
    galleryNoImagesYet: "This gallery does not have images yet.",
    imagesOfPrefix: "Images of",
    viewImagePrefix: "View image:",
    imageViewer: "Image viewer",
    previous: "Previous",
    next: "Next",
    pageIndicator: "Page",
    pageSuffix: "",
    noPostsYet: "No posts yet",
    noPostsDesc: "Check back later for upcoming articles.",
    devModeWarningTitle: "Dev mode warning",
    buildFirstHint: "Run pnpm run build first to generate the search index.",
    postUnitSingle: "post",
    postUnitPlural: "posts",
    notFoundPageTitle: "404 Page not found",
    notFoundMessage: "Page not found",
    backToHome: "Back to home",
  },
} as const;

function normalizePathname(pathname: string): string {
  return pathname.replace(/^\/+|\/+$/g, "");
}

export function isLang(value: unknown): value is Lang {
  return SUPPORTED_LANGS.includes(value as Lang);
}

export function getLangFromPath(pathname: string): Lang {
  const firstSegment = normalizePathname(pathname).split("/")[0];
  return isLang(firstSegment) ? firstSegment : DEFAULT_LANG;
}

export function stripLangFromPath(pathname: string): string {
  const segments = normalizePathname(pathname).split("/").filter(Boolean);
  if (segments.length > 0 && isLang(segments[0])) {
    segments.shift();
  }
  return segments.join("/");
}

export function getLocalePath(lang: Lang, path = ""): string {
  const normalizedPath = normalizePathname(path);
  return getRelativeLocaleUrl(lang, normalizedPath || undefined);
}

export function getLocalizedPath(pathname: string, lang: Lang): string {
  return getLocalePath(lang, stripLangFromPath(pathname));
}

export function getLocalizedUrl(url: URL, lang: Lang): string {
  return `${getLocalizedPath(url.pathname, lang)}${url.search}${url.hash}`;
}

export function getLanguageStaticPaths() {
  return SUPPORTED_LANGS.map(lang => ({ params: { lang } }));
}

export function t(lang: Lang): (typeof ui)[Lang] {
  return ui[lang];
}
