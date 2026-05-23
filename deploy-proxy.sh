#!/bin/bash
# Aurora Sunglasses - 带代理的部署脚本

echo "🚀 Aurora Sunglasses 网站部署脚本 (带代理)"
echo "=========================================="

# 配置代理
export https_proxy="http://47.242.128.61:5000"
export http_proxy="http://47.242.128.61:5000"
export all_proxy="http://47.242.128.61:5000"

echo "✅ 代理已配置：47.242.128.61:5000"

cd /root/.openclaw/workspace/aurora-sunglasses-website

# 1. 安装依赖
echo ""
echo "📦 步骤 1: 安装依赖..."
npm install --legacy-peer-deps

# 2. 初始化 Git
echo ""
echo "🔗 步骤 2: 初始化 Git..."
git init
git add .
git commit -m "Initial commit - Aurora Sunglasses SEO website"
git branch -M main

# 3. 推送到 GitHub
echo ""
echo "📤 步骤 3: 推送到 GitHub..."
read -p "输入 GitHub 仓库地址 (或按回车跳过): " REPO_URL

if [ -n "$REPO_URL" ]; then
    git remote add origin $REPO_URL
    git push -u origin main
    echo "✅ 已推送到 GitHub"
else
    echo "⚠️ 请手动创建 GitHub 仓库并推送"
fi

# 4. Netlify 部署
echo ""
echo "🌐 步骤 4: Netlify 部署"
echo "   1. 访问：https://app.netlify.com"
echo "   2. 登录 (GitHub 账号)"
echo "   3. Add new site → Import from GitHub"
echo "   4. 选择 aurora-sunglasses-website"
echo "   5. Build command: npm run build"
echo "   6. Publish directory: dist"
echo "   7. Deploy site"
echo ""
echo "📖 详细指南：DEPLOYMENT_GUIDE.md"
echo ""
echo "✅ 部署脚本完成！"
