import { MarkdownInstance } from "astro";

export type Post = {
  title: string; // 文章标题
  slug: string;
  desc: string; // 文章描述
  author: string; // 文章作者
  pubDate: string; // 文章创建时间
  updatedDate: string; // 文章更新时间
  pubTimestamp: number;
  updatedTimestamp?: number;
  draft: boolean;
  file: URL;
  categories: string[]; // 分类
  _rawString: string;
  _images: Record<"name" | "url" | "alt", string>[];
  _head: { level: number; title: string; raw: string }[];
  top: boolean; // 首页置顶
  hero: string; // 文章头图
  heroPosition: "center" | "top" | "bottom"; // 文章头图展示部位
  heroHideTitle: boolean; // 文章头图中间是否展示文字
  Content: MarkdownInstance<any>["Content"];
  postPicture: string;
  toc: boolean; // 是否开启悬浮标题
  mode?: "indent"; // 首行段落是否缩进
  comment: boolean; // 是否可以评论
  theme: "github"|"normal"; // 是否可以评论
};
