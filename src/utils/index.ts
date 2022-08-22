import type { Post } from '#/type';
import { settings } from '@blog/config';
import type { MarkdownInstance } from 'astro';

const { MODE } = import.meta.env;

/**
 * 统一处理文章目录前缀
 */
export function getPostsUrl(slug) {
  return `/post/${slug}`;
}

/**
 * 获取所有的文章
 */
export async function getPosts() {
  const obj = await import.meta.glob('../../article/**/*.{md,mdx}', {
    eager: true,
  });
  return Object.values(obj) as MarkdownInstance<any>[];
}

/**
 * 处理单个文章信息
 */
export function single(post: MarkdownInstance<any>): Post {
  const slug = post.file
    .split('/')
    .reverse()[0]
    .replace(/\.(md|mdx)$/g, '');
  return {
    ...post.frontmatter,
    Content: post.Content,
    slug: slug,
    url: post.url, // 如果在src/pages目录外，此时url为undefined,那么就使用上面的slug手动拼接路由
    draft: post.file.split('/').reverse()[1] === 'drafts',
    pubTimestamp: new Date(post.frontmatter.pubDate).valueOf(),
    updatedTimestamp: !!post.frontmatter.updatedDate && new Date(post.frontmatter.updatedDate).valueOf(),
  };
}

/**
 * 处理文章信息
 */
export async function published(): Promise<Post[]> {
  const posts = await getPosts();
  const allPosts = posts
    .filter((post) => post.frontmatter.title)
    .map((post) => single(post))
    .filter((post) => MODE === 'development' || !post.draft)
    .sort((a, b) => b.pubTimestamp - a.pubTimestamp);
  return allPosts;
}
