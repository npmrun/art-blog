import { MarkdownInstance } from "astro";

export type Post = {
  title: string;
  slug: string;
  desc: string;
  author: string;
  pubDate: string;
  updatedDate: string;
  pubTimestamp: number;
  updatedTimestamp?: number;
  draft: boolean;
  file: URL;
  categories: string[];
  _rawString: string;
  _images: Record<"name" | "url" | "alt", string>[];
  _head: { level: number; title: string; raw: string }[];
  img: string;
  imgWidth: number;
  imgHeight: number;
  Content: MarkdownInstance<any>["Content"];
  postPicture: string;
  toc: boolean;
};
