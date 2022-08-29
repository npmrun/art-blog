import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import { astroImageTools } from "astro-imagetools";
import robotsTxt from "astro-robots-txt";
import compress from "astro-compress";
import path from "path";
import partytown from '@astrojs/partytown';

import sitemap from "@astrojs/sitemap";
import { exampleRemarkPlugin } from "./plugins/example-remark-plugin.mjs";

// https://astro.build/config
export default defineConfig({
    markdown: {
        remarkPlugins: [
            "remark-gfm",
            "remark-smartypants",
            exampleRemarkPlugin,
        ],
        rehypePlugins: [
            "rehype-slug",
            [
                "rehype-autolink-headings",
                {
                    behavior: "wrap",
                },
            ],
        ],
        shikiConfig: {
            theme: "poimandres",
            langs: [],
            wrap: false,
        },
    },
    site: "https://art.xieyaxin.top/",
    integrations: [
        tailwind({
            // Example: Provide a custom path to a Tailwind config file
            config: { path: "./tailwind.config.js" },
            applyBaseStyles: false, // 手动引入，控制CSS打包后的顺序
        }),
        partytown(),
        compress(),
        robotsTxt(),
        astroImageTools,
        vue(),
        mdx({
            remarkPlugins: {
                extends: [exampleRemarkPlugin],
            },
        }),
        sitemap()
    ],
    vite: {
        ssr: {
            external: ["svgo"],
        },
        resolve: {
            alias: {
                "@root": path.resolve("./"),
                "@blog": path.resolve("./src"),
                "#": path.resolve("./typings"),
            },
        },
        plugins: [],
    },
});
