// 首页分页个数
export const pageSize = 10;
// 站点信息配置
export const siteInfo = {
  siteName: "Art Blog",
  siteDesc: "A Beautity Blog To Record Life !",
  lang: "zh-cn",
  icon: "https://xieyaxin.top/usr/uploads/2022/05/1432272769.jpg",
  avatar: "https://xieyaxin.top/usr/uploads/2022/05/1432272769.jpg",
  github: "https://github.com/npmrun/art-blog"
};

export const nav = [
  {
    title: "分类",
    slug: "/categories",
    children: []
  },
  {
    title: "关于",
    slug: "/about",
    icon: "emojione-v1:beer-mug",
    children: []
  },
  {
    title: "联系",
    slug: "/contact",
    icon: "emojione:call-me-hand",
    children: []
  },
];

export const settings = {
  showTOC: true,
  postPicture: "first", // first: 设置文章第一张图为头图
  categories: [
    {
      name: "Demo",
      desc: "一些简单的Demo测试",
      image: undefined,
      order: 1,
    },
    {
      name: "Astro",
      desc: "一个用于构建快速，以内容为中心的网站的Web框架。",
      image:
        "https://tva4.sinaimg.cn/large/9bd9b167gy1fwsihj5dtjj21hc0u0u0y.jpg",
      order: 2,
    },
  ],
  categorySettings: {
    order: "count",
  },
};
