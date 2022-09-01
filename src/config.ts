const { MODE } = import.meta.env;

export const isDev = MODE === "development";
export const isProd = MODE === "production";

// 首页分页个数
export const pageSize = 3;
// 站点信息配置
export const siteInfo = {
    siteName: "Art Blog",
    siteDesc: "A Beautity Blog To Record Life !",
    lang: "zh-cn",
    icon: "https://xieyaxin.top/usr/uploads/2022/05/1432272769.jpg",
    avatar: "https://xieyaxin.top/usr/uploads/2022/05/1432272769.jpg",
    github: "https://github.com/npmrun/art-blog",
    hero: "https://tva3.sinaimg.cn/large/9bd9b167gy1fwsgda81zhj21hc0u0b29.jpg",
    heroPosition: "center",
    startTime: "6/8/2022 10:28:00",
};

export const nav = [
    {
        title: "搜索",
        slug: "/search",
        icon: false,
        children: [],
    },
    {
        title: "分类",
        slug: "/categories",
        icon: false,
        children: [],
    },
    {
        title: "关于",
        slug: "/about",
        // icon: false,
        icon: "emojione-v1:beer-mug",
        children: [],
    },
    {
        title: "联系",
        slug: "/contact",
        // icon: false,
        icon: "emojione:call-me-hand",
        children: [],
    },
    {
        title: "留言板",
        slug: "/board",
        icon: false,
        children: [],
    },
    {
        title: "Demo",
        slug: "/demo",
        // icon: false,
        children: [],
    },
];

export const settings = {
    showTOC: true,
    postPicture: "first", // first: 设置文章第一张图为头图
    categories: [
        {
            name: "Demo",
            desc: "一些简单的Demo测试",
            image: "https://tva3.sinaimg.cn/large/9bd9b167gy1g4lhmmp7aqj21hc0xc4ii.jpg",
            order: 1,
        },
        {
            name: "Astro",
            desc: "一个用于构建快速，以内容为中心的网站的Web框架。",
            image: "https://tva4.sinaimg.cn/large/9bd9b167gy1fwsihj5dtjj21hc0u0u0y.jpg",
            order: 2,
        },
    ],
    categorySettings: {
        order: "count",
    },
};
