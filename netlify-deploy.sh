#!/bin/bash
# Netlify 部署脚本

SITE_ID="03df584d-ae96-4bed-8a07-ac9e3894d514"
TOKEN="nfp_K48su4vhWiu2ijZxL1kn5hpXCZnuZ8ctde11"
DIST_DIR="/root/.openclaw/workspace/aurora-sunglasses-website/dist"

echo "🚀 开始部署到 Netlify..."
echo "站点 ID: $SITE_ID"

# 创建部署
DEPLOY_RESPONSE=$(curl -s -X POST "https://api.netlify.com/api/v1/sites/$SITE_ID/deploys" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json")

DEPLOY_ID=$(echo $DEPLOY_RESPONSE | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)

echo "部署 ID: $DEPLOY_ID"

if [ -z "$DEPLOY_ID" ]; then
    echo "❌ 创建部署失败"
    exit 1
fi

echo "✅ 部署创建成功，开始上传文件..."

# 上传每个文件
cd $DIST_DIR
for file in $(find . -type f); do
    # 移除开头的 ./
    filepath=${file#./}
    
    # 计算 SHA
    sha=$(sha256sum "$filepath" | cut -d' ' -f1)
    
    # 上传文件
    curl -s -X POST "https://api.netlify.com/api/v1/deploys/$DEPLOY_ID/files/$filepath" \
        -H "Authorization: Bearer $TOKEN" \
        -H "Content-Type: application/octet-stream" \
        -d @"$filepath" > /dev/null
    
    echo "  📄 已上传：$filepath"
done

echo ""
echo "🎉 部署完成！"
echo "访问：https://aurora-sunglasses.netlify.app"
