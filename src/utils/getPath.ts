import { BLOG_PATH } from "@/content.config";
import type { Lang } from "@/i18n/ui";
import { slugifyStr } from "./slugify";

/**
 * Get full path of a blog post
 * @param id - id of the blog post (aka slug)
 * @param filePath - the blog post full file location
 * @param includeBase - whether to include `/posts` in return value
 * @returns blog post path
 */
export function getPath(
  id: string,
  filePath: string | undefined,
  includeBase = true,
  lang?: Lang
) {
  const pathSegments = filePath
    ?.replace(BLOG_PATH, "")
    .split("/")
    .filter(path => path !== "") // remove empty string in the segments ["", "other-path"] <- empty string will be removed
    .filter(path => !path.startsWith("_")) // exclude directories start with underscore "_"
    .slice(0, -1) // remove the last segment_ file name_ since it's unnecessary
    .map(segment => slugifyStr(segment)); // slugify each segment path

  // Making sure `id` does not contain the directory
  const blogId = id.split("/");
  const slug = blogId.length > 0 ? blogId.at(-1) : "";
  const segments = [
    lang,
    includeBase ? "posts" : "",
    ...(pathSegments ?? []),
    slug ?? "",
  ].filter(Boolean);

  // If not inside the sub-dir, simply return the file path
  if (!pathSegments || pathSegments.length < 1) {
    return `/${segments.join("/")}`;
  }

  return `/${segments.join("/")}`;
}
