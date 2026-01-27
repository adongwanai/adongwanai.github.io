---
title: 'Cursor + Claude + MCP：打造超级个体的 AI 军火库'
description: '揭秘我的独家技术栈配置。如何将 VS Code 改造为最强大的 AI 编程 IDE，提升 10 倍开发效率。'
pubDate: '2026-01-25'
tags: ['Tools', 'Cursor', 'MCP']
---

## 工欲善其事，必先利其器

在 Vibe Coding 时代，选择正确的工具链至关重要。以下是我经过无数次迭代后沉淀下来的“黄金三角”配置。

### 1. 核心编辑器：Cursor

Cursor 不仅仅是 VS Code 的 fork，它重新定义了 AI 辅助编程的交互范式。
*   **Composer (Cmd+I)**: 能够跨文件理解上下文，一次性重构整个模块。
*   **Tab Autocomplete**: 预测你的下一步操作，不仅仅是补全代码，更是补全思路。

### 2. 智慧大脑：Claude 3.5 Sonnet

目前公认最适合编程的大语言模型。相比 GPT-4o，Claude 在代码逻辑的连贯性和复杂指令的遵循上表现更佳。我主要在 Cursor 的 Chat 侧边栏和 Composer 中调用它。

### 3. 连接器：Model Context Protocol (MCP)

这是 Anthropic 推出的开放协议，是连接 LLM 和本地数据的桥梁。
通过 MCP，我的 Claude 可以：
*   直接读取本地 SQLite 数据库
*   访问 Github 仓库的最新 Issues
*   分析项目目录结构，生成 implementation plans

### 结语

这套组合拳让我能够以一己之力完成全栈团队的工作量。这就是 Vibe Coding 的魔力。
