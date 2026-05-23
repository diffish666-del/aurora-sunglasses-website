#!/bin/bash
# Aurora Sunglasses - 一键部署脚本

echo "🚀 Aurora Sunglasses 网站部署脚本"
echo "=================================="

cd /root/.openclaw/workspace/aurora-sunglasses-website

# 1. 初始化 Git
echo ""
echo "📦 步骤 1: 初始化 Git..."
git init
git add .
git commit -m "Initial commit - Aurora Sunglasses SEO website"
git branch -M main

# 2. 提示用户创建 GitHub 仓库
echo ""
echo "🔗 步骤 2: 请在 GitHub 创建仓库"
echo "   1. 访问：https://github.com/new"
echo "   2. 仓库名：aurora-sunglasses-website"
echo "   3. 设为 Public"
echo "   4. 创建后复制仓库地址"
echo ""
read -p "输入 GitHub 仓库地址 (如：https://github.com/diffish666-del/aurora-sunglasses-website.git): " REPO_URL

if [ -n "$REPO_URL" ]; then
    git remote add origin $REPO_URL
    git push -u origin main
    echo "✅ 代码已推送到 GitHub"
else
    echo "⚠️ 跳过 GitHub 推送"
fi

# 3. Netlify 部署说明
echo ""
echo "🌐 步骤 3: Netlify 部署"
echo "   1. 访问：https://app.netlify.com"
echo "   2. 登录 (使用 GitHub 账号)"
echo "   3. 点击 'Add new site' → 'Import an existing project'"
echo "   4. 选择 GitHub → 找到 aurora-sunglasses-website"
echo "   5. 构建设置:"
echo "      - Build command: npm run build"
echo "      - Publish directory: dist"
echo "   6. 点击 'Deploy site'"
echo ""
echo "📖 详细指南请查看：DEPLOYMENT_GUIDE.md"
echo ""
echo "✅ 部署脚本完成！"
