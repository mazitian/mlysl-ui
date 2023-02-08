#!/user/bin/env sh

set -e

npm run docs:build

cd docs/.vitepress/dist

git init
git add -A
git commit -m "提交"
git push -f https://github.com/mazitian/mazitian.github.io.git master:gh-pages

cd -
rm -rf docs/.vitepress/dist