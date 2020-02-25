const fs = require('fs');

const originPackageJson = require('../package.json');

const destinationPath = process.env.INIT_CWD;

/**
 * package.json in working directory
 */
const copiedPackageJson = require(`${destinationPath}/package.json`); // eslint-disable-line import/no-dynamic-require

/**
 * delete unnecessary packages for new project
 */
const rollupPlugins = [
  '@babel/plugin-external-helpers',
  'rollup',
  'rollup-plugin-babel',
  'rollup-plugin-node-resolve',
  'rollup-plugin-postcss',
  'rollup-plugin-commonjs',
];
const newDevDependencies = Object.keys(originPackageJson.devDependencies)
  .reduce((newDevDeps, dep) => {
    const obj = newDevDeps;
    if (!rollupPlugins.includes(dep)) {
      obj[dep] = originPackageJson.devDependencies[dep];
    }

    return newDevDeps;
  }, {});

/**
 * merge dependencies from both package.json files
 */
const newConfig = {
  ...copiedPackageJson,
  scripts: {
    precommit: originPackageJson.scripts.precommit,
    ...copiedPackageJson.scripts,
    start: originPackageJson.scripts.start,
    build: originPackageJson.scripts.build,
  },
  dependencies: { ...copiedPackageJson.dependencies, ...originPackageJson.dependencies },
  devDependencies: newDevDependencies,
};

/**
 * write new config to package.json file in new project
 */
fs.writeFileSync(`${destinationPath}/package.json`, JSON.stringify(newConfig, null, 2));
