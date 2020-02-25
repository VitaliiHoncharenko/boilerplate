const fs = require('fs');

/**
 * path to new project directory from node_modules package folder
 */
const destinationPath = process.env.INIT_CWD;

/**
 * read origin config object from file
 */
const originLintConfig = JSON.parse(fs.readFileSync('.lintstagedrc', 'utf8'));

/**
 * create new lint config for new project
 */
const newLintConfig = {
  '*.scss': originLintConfig['*.scss'],
  '*.js': ['eslint --fix ./src', 'git add'],
};

/**
 * write new config to .lintstagedrc file in new project
 */
fs.writeFileSync(`${destinationPath}/.lintstagedrc`, JSON.stringify(newLintConfig, null, 2));
