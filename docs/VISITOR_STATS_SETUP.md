# 访客统计展示设置指南

本指南帮助你设置网页上的访客地图和计数器展示。

## 🎯 可选的服务

### 1. **ClustrMaps** ⭐ 推荐
- ✅ 免费
- ✅ 显示 2D 世界地图
- ✅ 显示访客来源点
- ✅ 永久保存数据
- 网站：https://clustrmaps.com/

### 2. **RevolverMaps** ⭐ 推荐
- ✅ 免费
- ✅ 显示 3D 地球仪（很酷！）
- ✅ 实时访客位置
- ✅ 多种样式选择
- 网站：https://www.revolvermaps.com/

### 3. **HitWebCounter**
- ✅ 免费
- ✅ 简单的数字计数器
- ✅ 多种样式
- 网站：https://www.hitwebcounter.com/

### 4. **Flag Counter**
- ✅ 免费
- ✅ 显示各国国旗
- ✅ 每个国家访问次数
- 网站：https://flagcounter.com/

## 📝 设置步骤（以 ClustrMaps 为例）

### Step 1: 注册 ClustrMaps

1. 访问 https://clustrmaps.com/
2. 点击 "Register" 注册账号
3. 使用邮箱或 Google 账号登录

### Step 2: 添加你的网站

1. 登录后，点击 "Add your site"
2. 填写网站信息：
   - **Website URL**: `https://adongwanai.github.io`
   - **Title**: 阿东玩AI Portfolio
3. 点击 "Register Website"

### Step 3: 获取 Widget 代码

1. 在 Dashboard 选择你的网站
2. 点击 "Get Widget Code"
3. 复制提供的 HTML 代码

类似这样：
```html
<script id="clstr_globe" type="text/javascript" src="//clustrmaps.com/globe.js?d=abc123def456"></script>
```

### Step 4: 集成到网站

打开 `src/components/VisitorStats.astro`，找到对应的注释部分，替换为你的代码：

```astro
<!-- Replace this section with your ClustrMaps code -->
<script id="clstr_globe" type="text/javascript" src="//clustrmaps.com/globe.js?d=YOUR_KEY"></script>
```

### Step 5: 本地测试

```bash
npm run dev
```

访问 http://localhost:4321 查看是否显示地图。

### Step 6: 部署到 GitHub Pages

```bash
git add .
git commit -m "feat: add visitor stats widget"
git push origin main
```

GitHub Actions 会自动部署，几分钟后访问 https://adongwanai.github.io 即可看到效果。

## 🌍 使用 RevolverMaps（3D 地球仪）

### 设置步骤

1. 访问 https://www.revolvermaps.com/
2. 点击 "Get Your Free 3D Globe"
3. 配置参数：
   - **Size**: 选择尺寸（推荐 small 或 medium）
   - **Color**: 选择颜色（建议 blue 或 red）
   - **Style**: 选择样式（推荐 interactive）
4. 点击 "Generate" 生成代码
5. 复制生成的脚本代码

### 集成到网站

在 `VisitorStats.astro` 中：

```astro
<!-- Option 2: RevolverMaps 3D Globe -->
<script
  type="text/javascript"
  src="//rf.revolvermaps.com/0/0/6.js?i=YOUR_ID&m=0&c=ff0000&cr1=ffffff&f=arial&l=0&lw=0&lh=0&bg=ffffff"
  async="async"
></script>
```

替换 `YOUR_ID` 为你的实际 ID。

## 🔢 使用 HitWebCounter（数字计数器）

### 设置步骤

1. 访问 https://www.hitwebcounter.com/
2. 选择你喜欢的计数器样式
3. 填写：
   - 初始数字（可以填 0 或你的历史访问量）
   - 数字位数（推荐 5-7 位）
4. 点击 "Generate Counter"
5. 复制 HTML 代码

### 集成到网站

在 `VisitorStats.astro` 中：

```astro
<a href="https://www.hitwebcounter.com" target="_blank">
  <img
    src="https://hitwebcounter.com/counter/counter.php?page=YOUR_ID&style=0006&nbdigits=5&type=ip&initCount=0"
    title="Free Counter"
    border="0"
  />
</a>
```

## 💡 推荐组合

### 方案 A: 简洁风格
- ClustrMaps (2D 地图)
- HitWebCounter (简单计数器)

### 方案 B: 酷炫风格
- RevolverMaps (3D 地球仪)
- 自定义计数器样式

### 方案 C: 详细信息
- ClustrMaps (地图)
- Flag Counter (国旗统计)
- HitWebCounter (总计数)

## 🔧 在 GitHub Pages 上生效

### 为什么能永久保存？

这些服务使用自己的服务器存储数据：
- ✅ **免费**：完全免费，无需付费
- ✅ **永久**：数据保存在他们的服务器
- ✅ **自动更新**：每次访问自动计数
- ✅ **无需维护**：不需要你自己搭建数据库

### 部署流程

```bash
# 1. 修改代码
vim src/components/VisitorStats.astro

# 2. 本地测试
npm run dev

# 3. 提交代码
git add src/components/VisitorStats.astro
git commit -m "feat: add visitor stats widget"
git push origin main

# 4. 等待部署（约 1-2 分钟）
# 访问 https://adongwanai.github.io 查看效果
```

### 验证部署

部署成功后：
1. 访问你的网站
2. 查看访客统计区域是否显示
3. 访问几次你的网站
4. 几分钟后刷新，数字应该会增加

## 📊 查看详细统计

大部分服务还提供后台统计面板：

### ClustrMaps
- 登录 https://clustrmaps.com/
- 查看详细的访问来源统计
- 导出数据为 CSV

### RevolverMaps
- 在 widget 上点击查看详细信息
- 显示最近的访客列表

## 🎨 自定义样式

### 调整容器样式

编辑 `VisitorStats.astro` 的 `<style>` 部分：

```astro
<style>
  .visitor-stats-container {
    padding: 2rem 0;
    background: linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.05));
  }
</style>
```

### 调整显示位置

当前在页面底部。如果想移到其他位置，编辑 `src/pages/index.astro`，找到这行：

```astro
<section class="py-8 bg-gray-50 dark:bg-white/5">
  <VisitorStats />
</section>
```

可以移到任何你想要的位置。

## ❓ 常见问题

**Q: 数据会丢失吗？**
A: 不会。数据保存在 ClustrMaps/RevolverMaps 的服务器，永久保存。

**Q: 影响网站速度吗？**
A: 影响很小。脚本异步加载，不会阻塞页面渲染。

**Q: 移动端显示正常吗？**
A: 是的，这些服务都支持响应式设计。

**Q: 可以同时使用多个服务吗？**
A: 可以！但不建议超过 2 个，会影响加载速度。

**Q: GitHub Actions 部署需要特殊配置吗？**
A: 不需要。只要代码 push 到 main 分支，会自动部署。

## 🆘 需要帮助？

- **ClustrMaps 支持**: https://clustrmaps.com/support
- **RevolverMaps 帮助**: https://www.revolvermaps.com/help
- **项目 Issues**: https://github.com/adongwanai/adongwanai.github.io/issues

## 📚 扩展阅读

- [GitHub Pages 官方文档](https://docs.github.com/en/pages)
- [Astro 集成第三方脚本](https://docs.astro.build/en/guides/integrations-guide/)
