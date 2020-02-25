const path = require('path');

module.exports = {
  entry: path.join(process.cwd(), 'boilerplate-main/src/index.js'),
  pathToHtml: path.join(process.cwd(), 'boilerplate-main/public/index.html'),
  contentBase: path.join(process.cwd(), 'dist'),
  resolve: {
    alias: {
      components: path.join(process.cwd(), 'boilerplate-main/src/components'),
      containers: path.join(process.cwd(), 'boilerplate-main/src/containers'),
      '@casino/core': path.join(process.cwd(), 'main-core/src'),
    },
  },
};
