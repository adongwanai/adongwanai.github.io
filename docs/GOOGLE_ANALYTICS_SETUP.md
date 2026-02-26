# Google Analytics 4 设置指南

## 功能特性

Google Analytics 4 (GA4) 提供以下功能：

- **实时访客统计** - 查看当前在线访客数量
- **地理分布** - 世界地图展示访客来源国家/城市
- **设备统计** - 桌面、移动、平板设备分布
- **流量来源** - 了解访客从哪里来（搜索、直接、社交媒体等）
- **热门页面** - 哪些页面访问量最高
- **用户行为** - 页面停留时间、跳出率等
- **无限期数据保存** - Google Analytics 数据永久保存

## 设置步骤

### 1. 创建 Google Analytics 账号

1. 访问 [Google Analytics](https://analytics.google.com/)
2. 点击"开始测量"
3. 登录你的 Google 账号

### 2. 创建媒体资源

1. 点击"创建账号"
2. 填写账号名称（例如：阿东玩AI Portfolio）
3. 选择"创建媒体资源"
4. 填写媒体资源信息：
   - **媒体资源名称**: 阿东玩AI网站
   - **报告时区**: 选择你的时区
   - **货币**: 根据需要选择（通常CNY）

### 3. 获取测量 ID

创建完成后，你会得到一个**测量 ID**，格式为 `G-XXXXXXXXXX`

### 4. 配置环境变量

在项目根目录创建 `.env` 文件：

```bash
# 复制示例文件
cp .env.example .env
```

编辑 `.env` 文件，填入你的测量 ID：

```env
PUBLIC_GA_ID=G-你的测量ID
```

**重要**: `.env` 文件已在 `.gitignore` 中，不会被提交到 Git

### 5. 本地测试

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问网站，查看页面源代码，应该能看到 GA4 脚本已加载。

### 6. 部署到生产环境

GitHub Pages 部署时，需要在仓库设置中配置环境变量：

1. 进入 GitHub 仓库设置
2. 点击 "Secrets and variables" → "Actions"
3. 点击 "New repository secret"
4. 添加以下 secret：
   - **Name**: `PUBLIC_GA_ID`
   - **Value**: `G-你的测量ID`

然后推送代码，GitHub Actions 会自动部署。

### 7. 验证安装

1. 访问你的网站
2. 在 Google Analytics 中进入"实时" → "概览"
3. 几秒钟后应该能看到你的访问记录

## 查看数据

### 访问地图和地理位置

1. 登录 [Google Analytics](https://analytics.google.com/)
2. 左侧菜单：**报告** → **用户** → **用户属性** → **位置**
3. 可以看到：
   - 国家/地区分布
   - 城市分布
   - 世界地图热力图

### 实时访客

1. 左侧菜单：**报告** → **实时** → **概览**
2. 可以看到：
   - 当前在线人数（最近 30 分钟）
   - 实时页面浏览
   - 实时地理位置
   - 实时流量来源

### 访问人数统计

1. 左侧菜单：**报告** → **生命周期** → **获客** → **流量获取**
2. 可以看到：
   - 总用户数
   - 新用户 vs 回访用户
   - 会话次数
   - 页面浏览次数

### 历史数据

GA4 会永久保存数据，可以随时查看：

- **日报**: 查看每天的变化趋势
- **周报/月报**: 长期趋势分析
- **自定义日期范围**: 对比不同时期

## 高级功能（可选）

### 事件跟踪

默认已跟踪页面浏览。如需跟踪自定义事件（如按钮点击）：

```javascript
// 在组件中添加
gtag('event', 'button_click', {
  'button_name': 'GitHub链接',
  'page_location': window.location.href
});
```

### 跨域跟踪

如果有多个子域名，可以配置跨域跟踪。

### 导出数据

GA4 支持将数据导出到：
- Google Sheets
- BigQuery
- 下载为 CSV/Excel

## 数据隐私

GA4 符合 GDPR 和 CCPA 要求：
- 不存储 IP 地址
- 可设置数据保留期
- 支持用户同意模式

## 常见问题

**Q: 数据多久更新？**
A: 实时报告几秒更新，标准报告 24-48 小时完整处理。

**Q: 免费版有限制吗？**
A: 每月最多 1000 万次事件，对个人网站完全够用。

**Q: 数据永久保存吗？**
A: 是的，GA4 不像旧版 Universal Analytics 有数据保留限制。

**Q: 会影响网站速度吗？**
A: 影响极小，GA 脚本异步加载，且使用全球 CDN。

## 需要帮助？

- [GA4 官方文档](https://support.google.com/analytics#topic=9143250)
- [GA4 帮助社区](https://support.google.com/analytics/community?hl=en)
