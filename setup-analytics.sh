#!/bin/bash

echo "🔧 Google Analytics 4 快速设置"
echo "================================"
echo ""
echo "1. 访问 https://analytics.google.com/ 创建 GA4 账号"
echo "2. 获取你的测量 ID (格式: G-XXXXXXXXXX)"
echo ""
read -p "请输入你的 GA 测量 ID: " GA_ID

if [[ ! $GA_ID =~ ^G-[A-Z0-9]+$ ]]; then
  echo "❌ 无效的 GA ID 格式，应该是 G-XXXXXXXXXX"
  exit 1
fi

echo "PUBLIC_GA_ID=$GA_ID" > .env

echo ""
echo "✅ .env 文件已创建！"
echo ""
echo "📝 下一步："
echo "1. 本地测试: npm run dev"
echo "2. 访问你的网站，检查 GA 是否生效"
echo "3. 在 GitHub 仓库设置中添加 PUBLIC_GA_ID 环境变量"
echo "4. 推送代码部署"
echo ""
echo "详细文档请查看: docs/GOOGLE_ANALYTICS_SETUP.md"
