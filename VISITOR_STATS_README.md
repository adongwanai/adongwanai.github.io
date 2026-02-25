# 🌍 访客统计展示 - 快速开始

## ✨ 功能特性

你的网站现在支持显示：
- ✅ **访客计数器** - 显示总访问人数
- ✅ **访客地图** - 世界地图显示访客来源
- ✅ **永久保存** - 数据自动保存，永不丢失
- ✅ **实时更新** - 每次访问自动计数
- ✅ **完全免费** - 使用免费第三方服务

## 📍 现在的组��位置

组件已添加到首页底部，在 "Terminal" 区域之后。

## 🚀 5 分钟快速设置

### 步骤 1: 选择服务

推荐选项（任选一个或多个）：

| 服务 | 特点 | 设置时间 | 推荐度 |
|------|------|----------|--------|
| **ClustrMaps** | 2D 地图，简单清晰 | 2 分钟 | ⭐⭐⭐⭐⭐ |
| **RevolverMaps** | 3D 地球仪，酷炫效果 | 2 分钟 | ⭐⭐⭐⭐ |
| **HitWebCounter** | 数字计数器 | 1 分钟 | ⭐⭐⭐⭐ |

### 步骤 2: 获取 Widget 代码（以 ClustrMaps 为例）

1. **注册账号**
   - 访问：https://clustrmaps.com/
   - 点击 "Register" 使用邮箱注册

2. **添加你的网站**
   - 填写 URL：`https://adongwanai.github.io`
   - 填写标题：`阿东玩AI Portfolio`
   - 点击 "Register Website"

3. **复制 Widget 代码**
   - 在 Dashboard 点击 "Get Widget Code"
   - 复制类似这样的代码：
     ```html
     <script id="clstr_globe" type="text/javascript" src="//clustrmaps.com/globe.js?d=abc123def456"></script>
     ```

### 步骤 3: 启用组件

编辑 `src/components/VisitorStats.astro`：

```astro
// 第 20-22 行，设置要启用的服务
const ENABLE_CLUSTR_MAPS = true;    // 改为 true
const ENABLE_REVOLVER_MAPS = false;
const ENABLE_HIT_COUNTER = false;
```

然后在第 77 行左右，替换脚本地址：

```astro
<!-- 将这里的 YOUR_KEY 替换为你实际的 key -->
<script id="clstr_globe" type="text/javascript" src="//clustrmaps.com/globe.js?d=你的key"></script>
```

### 步骤 4: 测试

```bash
# 本地预览
npm run dev

# 访问 http://localhost:4321
# 检查页面底部是否显示访客地图
```

### 步骤 5: 部署到 GitHub Pages

```bash
git add .
git commit -m "feat: enable visitor stats widget"
git push origin main
```

等待 1-2 分钟，访问 https://adongwanai.github.io 即可看到效果！

## 🎯 验证成功

部署成功后：
1. 访问你的网站
2. 滚动到页面底部
3. 应该能看到 "🌍 VISITOR STATISTICS" 区域
4. 显示访客地图和/或计数器

访问几次网站，几分钟后刷新，数字应该会增加。

## 📊 查看详细统计

### ClustrMaps
- 访问 https://clustrmaps.com/
- 登录你的账号
- 查看 Dashboard 了解详细访客来源

### RevolverMaps
- 点击 widget 本身
- 显示最近的访客列表和位置

## 📖 详细文档

完整设置指南：[docs/VISITOR_STATS_SETUP.md](./VISITOR_STATS_SETUP.md)

## 💡 常见问题

**Q: 数据会丢失吗？**
A: 不会。数据保存在 ClustrMaps 的服务器，永久存储。

**Q: 需要在 GitHub 配置什么吗？**
A: 不需要！代码 push 后自动生效。

**Q: 影响网站��度吗？**
A: 影响极小，脚本异步加载。

**Q: 可以同时显示多个服务吗？**
A: 可以，但不建议超过 2 个。

**Q: 如何更换样式？**
A: 重新访问服务网站，生成新的 widget 代码即可。

## 🎨 自定义

### 调整位置

编辑 `src/pages/index.astro`，找到：

```astro
<!-- Visitor Stats Section -->
<section class="py-8 bg-gray-50 dark:bg-white/5">
  <VisitorStats />
</section>
```

可以移到任何位置，比如：
- 在 "关于我" 部分
- 在页脚之前
- 在项目列表之后

### 调整样式

编辑 `VisitorStats.astro` 的 `<style>` 部分（127-156 行）。

## 🆘 需要帮助？

- 📖 查看详细文档：[docs/VISITOR_STATS_SETUP.md](./VISITOR_STATS_SETUP.md)
- 🐛 报告问题：[GitHub Issues](https://github.com/adongwanai/adongwanai.github.io/issues)
- 💬 ClustrMaps 支持：https://clustrmaps.com/support

---

**提示**: 首次设置可能需要 5-10 分钟，熟悉后只需 2 分钟！
