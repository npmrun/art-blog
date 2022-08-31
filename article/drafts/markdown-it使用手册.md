---
title: markdown-it使用手册
desc: 文章描述
pubDate: 2022/8/22 21:04:52
author: Dash
img: https://tva4.sinaimg.cn/large/9bd9b167gy1fwsgodlmn8j21hc0u0hdt.jpg
categories: 
    - 技术笔记
---

## 简介

[`markdown-it`](https://markdown-it.github.io/)是一个`markdown`解析库,其他的同类产品有`remark`,`marked-it`,该文档主要用于介绍用法，之后再介绍如何深层定制，直到做出一个好看的`markdown`的展示界面。

## 配置
简单的示例调用如下
```ts
import MarkdownIt from "markdown-it"
const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true
});
console.log(md.render("# Heading1"))
```
其`MarkdownIt`的简要配置说明如下：
| 字段  | 说明  |
| :---: | :---: |
| html  |  是否将md中的html源码渲染出来,true: html维持不变, false: 转义html   |
| linkify| 是否将md中的链接编译成a标签  |
