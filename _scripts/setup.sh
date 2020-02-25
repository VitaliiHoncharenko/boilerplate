#!/bin/bash

if [ ! -d "$INIT_CWD/boilerplate-main" ] # run this command only in new project
then
  if [ ! -d "$INIT_CWD/src" ] # setup new project only once
  then
    echo -e "    boilerplate setup\n"
    # copy config and src folder structure
    cp -R ./boilerplate-main/* ./config $INIT_CWD
    # copy README and .rc files
    cp README.md .eslintrc .babelrc .stylelintrc .lintstagedrc $INIT_CWD
    # generate package.json file
    node ./_scripts/generatePackageJson.js
    # generate .lintstagedrc file
    node ./_scripts/generateLintConfig.js
    # rename paths for webpack configs
    node ./_scripts/changeConfigPaths.js
    # create gitignore file
    touch $INIT_CWD/.gitignore
    echo -e "/.vscode\n/.idea\n\nnode_modules\ndist\n\nstats.json\nnpm-debug.log*\n\n.DS_Store\n.npmrc" >> $INIT_CWD/.gitignore
    # run npm install in a new project
    cd $INIT_CWD && npm install
  else
    echo -e "    @main-core was updated\n"
  fi
else
  echo -e "    skip setup\n"
fi
