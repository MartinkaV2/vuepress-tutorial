@echo off
npm run docs:build
cd src/.vuepress/dist
git init
git add -A
git commit -m "deploy"
git push -f https://github.com/NartinkaV2/vuepress-tutorial.git main:gh-pages
cd ../..