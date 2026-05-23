# 🚀 Aurora Sunglasses 网站部署指南

## 第一步：上传代码到 GitHub

### 1.1 初始化 Git 仓库
```bash
cd /root/.openclaw/workspace/aurora-sunglasses-website
git init
git add .
git commit -m "Initial commit - Aurora Sunglasses SEO website"
```

### 1.2 创建 GitHub 仓库
1. 访问 https://github.com/new
2. 仓库名称：`aurora-sunglasses-website`
3. 设为 **Public** 或 **Private**（推荐 Public 用于 SEO）
4. 不要勾选 "Initialize this repository with a README"
5. 点击 "Create repository"

### 1.3 推送代码
```bash
git branch -M main
git remote add origin https://github.com/diffish666-del/aurora-sunglasses-website.git
git push -u origin main
```

---

## 第二步：部署到 Netlify

### 2.1 登录 Netlify
访问 https://app.netlify.com 并登录（可用 GitHub 账号一键登录）

### 2.2 创建新站点
1. 点击 **"Add new site"** → **"Import an existing project"**
2. 选择 **"GitHub"**
3. 授权 Netlify 访问你的 GitHub 账号
4. 找到并选择 `aurora-sunglasses-website` 仓库

### 2.3 配置构建设置
```
Build command: npm run build
Publish directory: dist
```

### 2.4 点击 "Deploy site"
等待 2-5 分钟，网站将自动部署完成。

---

## 第三步：绑定域名 aurora-sunglasses.com

### 3.1 在 Netlify 添加域名
1. 在 Netlify 站点页面 → **"Domain settings"**
2. 点击 **"Add custom domain"**
3. 输入：`aurora-sunglasses.com`
4. 点击 **"Verify"** → **"Add domain"**

### 3.2 配置 DNS（GoDaddy）

#### 方法 A：使用 Netlify DNS（推荐）
1. 在 Netlify Domain settings → 点击 **"Configure DNS"**
2. 记录 Netlify 提供的 Nameservers（如 dns1.p01.nsone.net 等）
3. 登录 GoDaddy → DNS Management
4. 将 Nameservers 改为 Netlify 提供的地址
5. 等待 24-48 小时生效

#### 方法 B：手动配置 DNS 记录
如果不想改 Nameservers，添加以下记录：

| 类型 | 名称 | 值 | TTL |
|------|------|-----|-----|
| A | @ | 75.2.60.5 | 1 小时 |
| A | @ | 76.76.21.21 | 1 小时 |
| CNAME | www | aurora-sunglasses.netlify.app | 1 小时 |

*注意：Netlify IP 地址可能变化，请以 Netlify 后台显示为准*

---

## 第四步：启用 HTTPS

Netlify 自动提供免费的 SSL 证书：
1. Domain settings → HTTPS
2. 确保 **"Provision certificate from Let's Encrypt"** 已启用
3. 等待证书颁发（通常几分钟内完成）

---

## 第五步：配置联系表单

网站联系表单使用 Formspree（免费）：

### 5.1 创建 Formspree 表单
1. 访问 https://formspree.io
2. 注册账号
3. 创建新表单 → 获取表单 ID

### 5.2 更新代码
编辑 `src/pages/contact.astro`，找到：
```html
<form action="https://formspree.io/f/your-form-id" method="POST">
```
替换 `your-form-id` 为你的实际表单 ID。

### 5.3 重新部署
```bash
git add .
git commit -m "Update contact form"
git push
```
Netlify 会自动重新部署。

---

## 第六步：提交到 Google Search Console

### 6.1 验证网站所有权
1. 访问 https://search.google.com/search-console
2. 添加资源 → 输入 `https://aurora-sunglasses.com`
3. 选择 **"HTML 文件验证"**
4. 下载 HTML 文件

### 6.2 上传验证文件
1. 将 HTML 文件放入 `public/` 文件夹
2. 提交到 GitHub：
```bash
git add .
git commit -m "Add Google verification file"
git push
```

### 6.3 提交 Sitemap
1. 在 Search Console → Sitemaps
2. 输入：`sitemap-index.xml`
3. 点击提交

---

## 第七步：添加 Google Analytics（可选）

### 7.1 获取跟踪 ID
1. 访问 https://analytics.google.com
2. 创建账号 → 添加网站
3. 获取 Measurement ID（格式：G-XXXXXXXXXX）

### 7.2 添加到网站
编辑 `src/layouts/BaseLayout.astro`，在 `<head>` 中添加：
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## ✅ 部署完成检查清单

- [ ] GitHub 仓库已创建并推送代码
- [ ] Netlify 站点已部署
- [ ] 域名已绑定（访问 aurora-sunglasses.com 正常）
- [ ] HTTPS 已启用（显示小锁图标）
- [ ] 联系表单可正常工作
- [ ] Google Search Console 已验证
- [ ] Sitemap 已提交
- [ ] Google Analytics 已添加（可选）

---

## 🛠️ 日常维护

### 更新内容
```bash
# 修改文件后
git add .
git commit -m "Update product descriptions"
git push
# Netlify 自动重新部署
```

### 查看部署日志
Netlify Dashboard → Deploys → 点击任意部署查看日志

### 回滚到旧版本
Netlify Dashboard → Deploys → 找到旧版本 → 点击 "Publish deploy"

---

## 📞 遇到问题？

### 常见错误解决

**1. 构建失败**
- 检查 `package.json` 依赖是否正确
- 运行 `npm install` 确保本地构建成功

**2. 域名不生效**
- DNS 变更需要 24-48 小时传播
- 使用 https://dnschecker.org 检查全球 DNS 状态

**3. 404 错误**
- 检查文件路径是否正确
- 确保路由文件名匹配（如 `about.astro` → `/about`）

---

**祝你部署顺利！🎉**
