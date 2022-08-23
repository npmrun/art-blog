---
title: tsconfig模板配置
desc: tsconfig的简要配置，用于快速写一个Demo
pubDate: 2022/8/23 10:52:21
author: Dash
img: https://tva4.sinaimg.cn/large/9bd9b167gy1g4lho53ng3j21hc0xckf7.jpg
categories: 
    - 模板配置
---

```json
{
  "compilerOptions": {
    // Enable top-level await, and other modern ESM features.
    "target": "ESNext",
    "module": "ESNext",
    // Enable node-style module resolution, for things like npm package imports.
    "moduleResolution": "node",
    // Enable JSON imports.
    "resolveJsonModule": true,
    // Enable stricter transpilation for better output.
    "isolatedModules": true,
    "jsx": "preserve",
  }
}

```
```json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "module": "commonjs",
    "target": "es5",
	"removeComments": true,
    "sourceMap": true,
    "outDir": "./dist",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./source/*"]
    }
  },
  "exclude": [
    "node_modules"
  ]
}
```