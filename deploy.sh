#!/usr/bin/env sh

# Build latest docs
npm run build

# navigate to docs output directory
cd dist

# create a new blank git repository
git init
git add -A
git commit -m 'deploy'

# force push to docs repo
git push -f https://github.com/aftongauntlett/vue-portfolio-public.git master:gh-pages

cd -