const fs = require('fs');

/**
 * path to new project directory from node_modules package folder
 */
const destinationPath = process.env.INIT_CWD;

/**
 * read origin paths from file
 */
const originPaths = fs.readFileSync('config/paths.js', 'utf8');

/**
 * create appropriate paths for new project
 */
const newPaths = originPaths
  .replace(new RegExp(/boilerplate-main\//, 'g'), '')
  .replace(/'main-core\/src'/, '\'node_modules/nextgen-frontend\'');

/**
 * write new config to paths.js file in new project
 */
fs.writeFileSync(`${destinationPath}/config/paths.js`, newPaths, 'utf8');
