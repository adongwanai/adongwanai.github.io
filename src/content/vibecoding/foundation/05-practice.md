---
title: "第 5 章：实战 —— 10 分钟做出人生第一个小工具"
description: "这一章我们不讲理论，直接上手！跟着 nake13、supermao、小毛哥、Alvin 的真实路径，零基础 10 分钟出第一个小工具，30 天内就能变现。"
category: foundation
level: intermediate
tier: free
estimatedTime: "2 hours"
tags: ["practice", "cursor", "antigravity", "hands-on", "nake13"]
pubDate: 2026-02-26
order: 6
---

# 第 5 章：实战 —— 10 分钟做出人生第一个小工具

> **章节定位**：这一章我们不讲理论，直接上手！
>
> 跟着 nake13、supermao、Alvin 的真实路径，零基础 10 分钟出第一个小工具。

---

## 这一章你将学到

| 收获 | 说明 |
|------|------|
| **完整流程** | nake13 零基础 9 步全流程 |
| **工具实操** | Cursor / Antigravity 完整操作 |
| **真实案例** | 复现别人的成功路径 |
| **避坑指南** | 常见问题和解决方案 |

---

## 5.1 nake13 零基础 9 步全流程

> **来自 @nake13 的最清晰进阶路径**，每一步都经过验证：

| 步骤 | 操作 | 关键动作 |
|------|------|---------|
| **1** | 模型&工具选 | Claude > Cursor / Antigravity |
| **2** | 整理需求 | 把所有想法丢给 AI，输出 MRD + PRD |
| **3** | 拆解任务 | 新开对话，让 AI 告诉你"10 分钟内能做的最小功能是什么" |
| **4** | 持续迭代 | 每完成一个小功能，就问"下一步是什么？怎么验证？" |
| **5** | 修复 Bug | 把报错/截图全发给 AI |
| **6** | 学点基础 | AI 教你数据结构、Git 等 |
| **7** | 用好工具 | Cursor / VS Code + GitHub Desktop |
| **8** | 部署 | Cloudflare Worker（免费 + 超香） |
| **9** | 积累经验 | 每做一个项目都记 Prompt 和复盘 |

---

## 5.2 实战 1：用 Cursor 做出 X 名片 & 二维码生成器

> **来自 @supermao #001 完整复现**，10 分钟可完成

### 步骤 1：下载 Cursor

访问 https://cursor.com/ ，下载并安装。

### 步骤 2：新建项目

1. 打开 Cursor
2. 新建空文件夹 `qr-maker`
3. 点击 "Open Project"

### 步骤 3：输入 Prompt

在右侧聊天框直接输入：

```
帮我在当前项目里生成一个简单网页：
- 输入一个 X（Twitter）主页 URL
- 点击按钮生成二维码
- 同时生成一张好看的 X 名片（带头像、昵称、简介）
- 做成手机端也能用的单页应用
- 用 Tailwind 美化，暗黑模式优先
```

### 步骤 4：Cursor 会自动

- 创建 index.html / style.css / script.js
- 写二维码逻辑（qr-code 库）
- 生成 UI
- 启动本地预览

### 步骤 5：运行

1. 点击 Run
2. 输入你的 X 链接
3. 看到二维码就成功！

**遇到问题？** 截图报错发给它，它立刻修复。

---

## 5.3 实战 2：用 Antigravity 做出交易助手

> **来自 @Alvin0617 真实案例**，做加密货币行情看板

### Prompt 示例（直接复制）

```
我想要一个网页，每天早上 10 点自动：
1. 聚合持仓最高的 Top 10 coins
2. 持仓变动最大的币种
3. 涨破/跌破 MA（1d 21 / 1w 50）的币种
数据来自 Binance API
请帮我生成完整网页 + 实时更新
```

### Antigravity 会自动

1. 生成前端代码
2. 调用 Binance API
3. 部署到 localhost
4. 你每天打开就能看交易信号

### 变现思路

- 卖订阅（每月 $9.9）
- 自己用（省手续费）
- 引流到其他产品

---

## 5.4 实战 3：做一个待办清单 Todo List

> **最经典的练手项目**，几乎所有新手都从这里开始

### Prompt

```
帮我做一个待办清单网页：

需求：
1. 输入框添加新任务
2. 点击复选框完成任务
3. 点击删除按钮删除任务
4. 显示任务数量统计

要求：
- 使用 React + Tailwind CSS
- 暗黑模式优先
- 数据保存到 localStorage
- 响应式设计，手机电脑都能用
```

### 完成后可以加的功能（进阶）

| 功能 | Prompt |
|------|--------|
| 分类标签 | "添加标签功能，每个任务可以打标签" |
| 优先级 | "添加优先级：高/中/低，用颜色区分" |
| 搜索 | "添加搜索过滤功能" |
| 拖拽排序 | "支持拖拽调整任务顺序" |

---

## 5.5 实战 4：做一个天气预报小程序

### Prompt

```
帮我做一个天气预报网页：

需求：
1. 输入城市名获取天气
2. 显示当前温度、天气状况、湿度、风力
3. 显示未来 7 天预报

技术栈：
- 前端：React
- 数据源：免费天气 API（wttr.in 或其他免费 API）

要求：
- 暗黑模式
- 加载动画
- 错误提示
```

---

## 5.6 迭代优化：遇到问题怎么办？

### 常见问题 1：代码运行报错

**解决步骤**：

1. 截图报错信息
2. 直接发给 AI：
```
我的项目报错，请帮我修复。
报错信息：[截图/粘贴]
预期结果：[描述]
```

### 常见问题 2：效果不对

**解决步骤**：

1. 描述你看到的现象
2. 描述你期望的效果
3. 发给 AI 调整

### 常见问题 3：不知道下一步做什么

**解决步骤**：

1. 问 AI："接下来还能加什么功能？"
2. 选一个简单的实现
3. 继续迭代

---

## 5.7 部署上线：让朋友也能用

> **来自 nake13 的经典路径**：免费 + 稳定

### 部署到 Cloudflare Pages

**步骤 1**：把代码推到 GitHub

```
1. 在 Cursor 打开终端
2. 输入：git init
3. 输入：git add .
4. 输入：git commit -m "first project"
5. 推送到 GitHub
```

**步骤 2：连接到 Cloudflare**

1. 访问 https://pages.cloudflare.com/
2. 选择 "Connect to Git"
3. 选择你的仓库
4. 点击 "Save and Deploy"

**步骤 5**：分享链接！

---

## 本章小结

| 知识点 | 关键点 |
|--------|--------|
| **9 步流程** | 选工具 → 整理需求 → 拆解任务 → 迭代 → Bug → 部署 |
| **Cursor 实战** | 输入 Prompt → 自动生成 → 预览 → 调整 |
| **Antigravity 实战** | 输入 Prompt → 自动部署 → 分享 |
| **部署** | GitHub + Cloudflare Pages 免费托管 |

---

## 本章作业

> **今天就能完成**

1. **用 Cursor 或 Antigravity** 做出上面任意一个工具
2. **把 Prompt + 成品截图** 发到社区讨论
3. **完成后发一条 #VibeCoding 打卡**，我会帮你转发！

---

## 5.8 推荐进阶资源

想继续深入？这些资源值得收藏：

| 资源 | 说明 | 链接 |
|------|------|------|
| **Datawhale easy-vibe** | 从0到1最完整路径，含贪吃蛇到完整产品上线 | [GitHub](https://github.com/datawhalechina/easy-vibe) |
| **宝玉 skills** | 内容生产神器：小红书图、封面、一键发布微信/X | [GitHub](https://github.com/JimLiu/baoyu-skills) |
| **Anthropic 官方 skills** | Claude Skills 权威范本，教你写自定义技能 | [GitHub](https://github.com/anthropics/skills) |
| **Awesome Vibe Coding** | 工具导航 + 对比（Cursor vs Claude Code vs v0） | [网站](https://awesome-vibe-coding.com) |

---

## 下章预告

> [第 6 章：精进 —— 从能用到好用](/vibecoding/foundation/advanced)

下一章教你把"玩具"变成"产品"：Debug、部署、迭代、Vibe Creating...
