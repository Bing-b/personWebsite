#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
pnpm run build

# 生成.nojekyll 文件避免github忽略下划线开头的路径_next
touch ./out/.nojekyll  

# 进入生成的文件夹
cd out

git init
git add -A
git commit -m '部署'

# 将mian构建后的代码合并到gh-pages分支上，然后在gh-pages分支上部署~
git push -f git@github.com:/Bing-b/w_website.git HEAD:gh-pages

cd -