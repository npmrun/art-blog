---
title: Vue3组件间如何传递值
desc:
pubDate: 2022/9/5 11:49:45
author: Dash
hero: https://tva2.sinaimg.cn/large/9bd9b167gy1fwshkimml4j21hc0u0u0x.jpg
categories:
    - 惬意
---

## 分析

首先,我们需要分析有几种组件的传递的情况，大致分为以下几种：

-   父组件---->子组件
-   子组件---->父组件
-   组件---->兄弟组件
-   祖先组件---->子孙组件
-   组件---->无关系组件

## 通用解决办法

1. 使用`pinia`等状态管理工具，可以参照官网代码实现，这里不细展开
2. 创建一个通用的数据模块,如下：
    ```ts
    import { reactive } from "vue";
    const state = reactive({});
    export default state;
    ```
    通过中间变量传递，本质上跟`pinia`类似
3. 使用订阅者发布者模型，可使用`tiny-emitter`，这是官方推荐的。唯一需要注意的是不要太过依赖，注意回收监听的事件。

## 父组件---->子组件

这种是最常见的组件传值，只需要如下方式即可:

```html 父子组件传值
<!-- parent.vue -->
<child title="测试" desc="测试文本表述" isShowDesc></child>
<!-- child.vue -->
<template>
    <div>
        <div>{{title}}</div>
        <div v-if="isShowDesc">{{desc}}</div>
    </div>
</template>
<script lang="ts" setup>
    const props = defineProps<{
        title: string;
        desc: string;
        isShowDesc?: boolean;
    }>();
</script>
```

## 子组件---->父组件

也是最常用的，使用 emit+事件监听即可：

```html 子父组件传值
<!-- parent.vue -->
<!-- 1 -->
<child @update="onUpdate"></child>
<!-- 2 -->
<child :onUpdate="onUpdate"></child>
<!-- child.vue -->
<template>
    <div>
        <div @click="onClick">update</div>
    </div>
</template>
<script lang="ts" setup>
    const emit = defineEmits<{
        (ev: "update"): void;
    }>();
    function onClick() {
        emit("update");
    }
</script>
```
