<p align="center">
<img src="https://i.loli.net/2017/09/07/59b1367f76fdb.png" alt="Material Render Phone">
</p>

<h1 align="center"><a href="https://material.viosey.com" target="_blank">Material Theme</a></h1>

> Nature, Pure | 原质，纯粹

## 咕不出来了，模板+jQuery 太让人头疼了

~~This is a [Peco](https://github.com/egojump/peco) theme forked from [hexo-theme-material](https://github.com/viosey/hexo-theme-material).  
本项目是移植自 [hexo-theme-material](https://github.com/viosey/hexo-theme-material) 的 [Peco](https://github.com/egojump/peco) 主题。~~

~~Currently **Working In Progress** and and should be ready soon.  
现在**还在开发**喵，应该不久之后就可以跑起来了**咕**~~

~~Peco is a static website generator that aims to be as simple as Hexo but also takes advantage of the modern front-end technology like Webpack, SPA, SSG (server-side generated).
It is feature-complete for generating blog or documentation websites but is still in beta phase, only use it if you're adventurous.  
Peco 是一个类似 Hexo 的静态网站构建工具，它用起来像 Hexo 一样简单的同时搭载了 Webpack、单页应用程序、服务端生成等现代前端特性。它拥有完整的用于搭建博客或文档网站的功能，但是目前仍然处于 Beta 阶段，如果你不是一个冒险者不要用它 2333~~

~~Peco is similar to [Gatsby](https://www.gatsbyjs.org/) but it's based on Vue. [This issue](https://github.com/viosey/hexo-theme-material/issues/609) discusses intention to port this theme to Gatsby, however I eventually decided to try working on Peco \w/  
Peco 类似于 [Gatsby](https://www.gatsbyjs.org/) 但是基于 Vue。[这里](https://github.com/viosey/hexo-theme-material/issues/609)有关于将这个主题移植到 Gatsby 的的讨论，但是我最终决定先尝试移植到 Peco。~~

<hr>

> 以下是原项目说明

<hr>

<p align="center">
<img alt="Version" src="https://img.shields.io/badge/version-1.5.2-757575.svg?style=flat-square"/>
<a href="https://viosey.com"><img alt="Author" src="https://img.shields.io/badge/author-Viosey-red.svg?style=flat-square"/></a>
<a href="https://hexo.io"><img alt="Hexo" src="https://img.shields.io/badge/hexo-3.0+-0e83cd.svg?style=flat-square"/></a>
<a href="https://nodejs.org/"><img alt="node.js" src="https://img.shields.io/badge/node.js-6.0%2B-43853d.svg?style=flat-square"/></a>
<a href="https://travis-ci.org/viosey/hexo-theme-material"><img alt="Build Status" src="https://img.shields.io/travis/viosey/hexo-theme-material.svg?style=flat-square"/></a>
<a href="https://www.npmjs.com/package/hexo-material"><img alt="npm" src="https://img.shields.io/npm/dt/hexo-material.svg?style=flat-square"/></a>
</p>


## Contents 目录

- [Introduction 介绍](#introduction-介绍)
- [Demo 演示](#demo-演示)
- [Download 下载](#download-下载)
- [Docs 文档](#docs-文档)
- [Contributing 贡献](#contributing-贡献)
- [License 许可证](#license-许可证)
- [Changelog 更新日志](#changelog-更新日志)
- [Support 支持](#support-支持)
- [Render 渲染](#render-渲染)


## Introduction 介绍

An elegant, Pure & Material Design Theme for Hexo.  
优雅、纯粹、质感的 Hexo 主题。


## Demo 演示

- [Viosey's Blog](https://blog.viosey.com)
- [neoFelhz's Blog](https://blog.nfz.moe)
- [liyin's Blog](https://liyin.date)


## Download 下载

#### [Download latest release version](https://github.com/viosey/hexo-theme-material/releases/latest)

> Should be the most stable. Recommended for most users.  
> 最稳定的版本，适合所有的用户。

#### [Download latest canary branch](https://github.com/viosey/hexo-theme-material/archive/canary.zip)

> Maybe unstable, but includes latest features. Recommended for developers.  
> 包含最新的、尚在开发中的特性，可能不稳定；适合进阶用户。

#### [Download other version](https://github.com/viosey/hexo-theme-material/releases)

> You can decide which version to use. May no longer provide support.  
> 你可以自己决定想要使用的版本；部分版本可能不再提供技术支持。

#### [Download using git](https://github.com/viosey/hexo-theme-material/releases)

> You can using git to choose which branch you want. For developer only.  
> 你可以自己决定想要使用的分支；仅限开发者使用。

```bash
cd themes
git clone https://github.com/viosey/hexo-theme-material.git material
cd material
git checkout {branch/tags name}
```

----

> ATTENTION! As the theme is developing, the theme config template will changes. To avoid conflict for users who are using `git pull` to upgrade the theme, we save the theme config template as `_config.template.yml`. You should make a copy of it and rename to `_config.yml`, then configure `_config.yml` when using the theme.  
> **注意！** 在主题的开发迭代过程中，主题的配置文件模板 可能会改动。为了避免使用 `git pull` 更新主题的用户出现冲突，我们将 主题配置文件模板 命名为 `_config.template.yml`。配置主题时，你应该拷贝一份 `_config.template.yml` 并将其重命名为 `_config.yml`。

## Docs 文档

[Material Theme Docs](https://material.viosey.com/docs/)

[Material 主题文档](https://material.viosey.com/docs/)

> [Docs Source Code](https://github.com/neko-dev/material-theme-docs)


## Contributing 贡献

All kinds of contributions (enhancements, new features, documentation & code improvements, issues & bugs reporting) are welcome.

Before you start your contributing, please read the [Contributing Rules Wiki](https://github.com/viosey/hexo-theme-material/wiki) first.

欢迎各种形式的贡献，包括但不限于优化，添加功能，文档 & 代码的改进，问题和 bugs 的报告。期待你的 `Pull Request`。

在参与贡献之前，请阅读[项目贡献 Wiki](https://github.com/viosey/hexo-theme-material/wiki)，了解如何为 Material 主题贡献。

## Changelog 更新日志

[View our release notes](https://github.com/viosey/hexo-theme-material/releases)

[阅读我们的更新日志](https://github.com/viosey/hexo-theme-material/releases)


## License 许可证

[![license](https://img.shields.io/github/license/viosey/hexo-theme-material.svg?style=flat-square)](https://github.com/viosey/hexo-theme-material/blob/master/LICENSE)

Open sourced under the GPL v3.0 license.

根据 GPL V3.0 许可证开源。

## Support 支持

### BroswerStack

![BrowserStack Status](https://www.browserstack.com/automate/badge.svg?badge_key=V1VkWmJMRjJqcHBjN1BIVFRlNzExM05XUk5hemcydEpZTHRBdGd5V244ST0tLTlvNklDT1NuVXFDaTh0RDBnQ3RCdXc9PQ==--c986c45d7c10a3264f46b414944d6393ba74ea22%)

Proudly using BrowserStack.

[![](https://i.loli.net/2017/09/27/59cbc16b0f8b4.png)](https://www.browserstack.com/)

> **BrowserStack** is a cloud-based cross-browser testing tool that enables developers to test their websites across various browsers on different operating systems and mobile devices, without requiring users to install virtual machines, devices or emulators.

### jsDelivr

Thanks jsDelivr for providing MaterialCDN service.

> **jsDelivr** – Open Source CDN. free, fast, and reliable. You can using the files from GitHub or NPM and serve them using jsDelivr.

[![](https://data.jsdelivr.com/v1/package/npm/hexo-material/badge)](https://www.jsdelivr.com/package/npm/hexo-material)

[`http://cdn.jsdelivr.net/npm/hexo-material/source/`](http://cdn.jsdelivr.net/npm/hexo-material/source/)

[![](https://data.jsdelivr.com/v1/package/gh/viosey/hexo-theme-material/badge)](https://www.jsdelivr.com/package/gh/viosey/hexo-theme-material)

[`https://cdn.jsdelivr.net/gh/viosey/hexo-theme-material/source/`](https://cdn.jsdelivr.net/gh/viosey/hexo-theme-material/source/)

## Render 渲染

![Materia-overview-tiny.png](https://i.loli.net/2017/09/28/59cccb0b25520.png)
