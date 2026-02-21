---
title: "进阶：编写自定义 MCP Server"
description: "通过本教程，你将学会如何从零开始编写一个专属的 MCP Server，用来扩展你的 Cursor 能力。"
pubDate: 2024-03-05
order: 5
---

当市面上的 Agent Skills 无法满足你的特殊业务需求时，你可以选择自己动手编写 MCP (Model Context Protocol) Server。

## 什么是 MCP？

Model Context Protocol 是由 Anthropic 推出的一种标准化协议，允许大模型在推理过程中随时通过定义好的规范接口去调用外部系统（如读取数据库、联网搜索、操作本地文件等）。

## 如何开始？

1. **环境准备**：确保你的电脑安装了 Node.js 或 Python 运行环境。
2. **选择 SDK**：官方分别提供了 `@modelcontextprotocol/sdk` (Node) 和 `mcp` (Python)。
3. **实现 Tools**：参考官方文档，实现你的核心业务逻辑，将其包装为 MCP 工具并暴露。

> [!TIP]
> 建议先从一个非常简单的 Echo Server 写起，跑通在 Cursor 里的配置流程，再逐渐添加复杂的业务。
