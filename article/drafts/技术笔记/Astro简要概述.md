---
title: Astro简要概述
desc: 文章描述
pubDate: 2022/8/31 21:17:49
author: Dash
hero: https://tva2.sinaimg.cn/large/9bd9b167gy1g4lhr9rjs5j21hc0xcx63.jpg
mode: indent
top: true
categories:
    - Astro
---

> 本文章默认您为前端程序员，一些基础的知识就不展开，可省略的步骤也会省略。

## Astro

[`astro`](https://astro.build/)是一个静态站点是生成器，能够任意搭配框架（如`vue`,`react`等）。其底层采用的是
最新的技术`vite`，所以优点就是快，但毕竟是新出来的打包器，存在者许多大大小小的问题，不过瑕不掩瑜，还是十分推荐使用的，
无他，就是快，同时对前端十分的友好，开发起来也不费事。同时，做小项目的花也可能可以使用它开发官网啥的，应该也是不错的选择。
其孤岛架构也是值得一看，后面文章会更深入的了解。

## 在线体验

学习新技术，当然是想越快看到效果越好了，[点击这里](https://astro.new/basics?on=stackblitz)就可以体验了。不过在线平台
也有其局限性，目前我发现了以下几点：

-   完全取决于网速，网速慢的话，估计你肯定是打不开了
-   无法粘贴图片，由于是博客，粘贴图片的功能是必须的，vscode 虽然支持，但是在云端的插件是读取不到本地的剪切板的。
-   有一些 node 特性没有实现，会导致程序运行不下去

总之，最好使用本地开发，云端毕竟不是长久之际。

## 本地安装

此部分省略，大家可直接按照[官网的步骤](https://docs.astro.build/zh-cn/install/auto/)安装，其他的没什么注意的。

## 开发问题

`vite`是新一代的打包工具，开发时用的是原生`esm`包，因此可以拥有极快的`hmr`，打包则是通过`rollup`打包，最终也是`esm`
的方式发布到线上。

因为是新生代的工具，不免存在很多的问题，我遇到一个印象最深的问题就是开发环境与线上环境不一致，最主要的就是 css 顺序问题。在开发这个主题的时候就遇到了，由于`tailwindcss`和组件内的`css scoped`在开发环境是正确的，`tailwindcss`先加载，`css scoped`后加载，这种就是正常的，但我在打包之后两个顺序就反过来了，因此每次开发到一段时间必须要打包看看效果，不然等上线才发现问题就晚了。

同时，由于`astro`也是新生代工具，存在或大或小的问题，主要体现在与旧版本的不兼容上，导致很多插件可能会出现问题，官方的自然是没有啥问题，但是第三方的不及时更新的化就可能会出现无法使用的情况，需要自己结合使用排查，逻辑一般不会很复杂，可以自己console或者debugger流程修改。
