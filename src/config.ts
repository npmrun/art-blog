// 首页分页个数
export const pageSize = 10;
// 站点信息配置
export const siteInfo = {
  siteName: "Dash Blog",
  siteDesc: "This is a simple blog",
  lang: "zh-cn",
  icon: "https://xieyaxin.top/usr/uploads/2022/05/1432272769.jpg",
  avatar: "https://xieyaxin.top/usr/uploads/2022/05/1432272769.jpg",
};

export const nav = [
  {
    title: "关于",
    slug: "/about",
  },
  {
    title: "联系",
    slug: "/contact",
  },
  {
    title: "分类",
    slug: "/categories",
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
      name: "指南",
      desc: "Themeasda",
      image:
        "https://tva4.sinaimg.cn/large/9bd9b167gy1fwsihj5dtjj21hc0u0u0y.jpg",
      order: 2,
    },
  ],
  categorySettings: {
    order: "count",
  },
};
