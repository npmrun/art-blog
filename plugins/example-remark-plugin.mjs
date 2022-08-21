import { visit } from 'unist-util-visit'
import Slugger from 'github-slugger'
import {hasProperty} from 'hast-util-has-property'
import {headingRank} from 'hast-util-heading-rank'
import {toString} from 'hast-util-to-string'

const slugs = new Slugger()

// 解析出文章中的图片地址
// function parseImages(md) {
//   const pattern = /!\[(.*?)\]\((.*?)\)/gm;
//   let matcher;
//   const result = [];
//   while ((matcher = pattern.exec(md)) !== null) {
//     result.push({
//       name: matcher[1],
//       url: matcher[2],
//     });
//   }
//   return result;
// }

// function parseHead(md) {
//   let m = md.match(/(#+)\s(.*)/g)
//   if(m&&m.length){
//     return m.map((item) => {
//       const matched = /(#+)\s(.*)/g.exec(item);
//       return {
//         level: matched[1].length,
//         title: matched[2],
//         raw: matched[0],
//       };
//     });
//   }
//   return []
// }

export function exampleRemarkPlugin() {
  return function (tree, file) {
    slugs.reset()

    const images = [];
    visit(tree, 'image', (node) => {
      const name = node.url.split('/').reverse()[0]
      images.push({
        name: name,
        alt: node.alt,
        url: node.url,
      })
    })
    const head = []
    visit(tree, 'heading', (node) => {
      head.push({
        level: node.depth,
        title: slugs.slug(toString(node)),
      })
    })
    // 原始字符串
    file.data.astro.frontmatter._rawString = file.value;
    // 内部图片
    file.data.astro.frontmatter._images = images;
    // 内部标题
    file.data.astro.frontmatter._head = head;
  };
}
