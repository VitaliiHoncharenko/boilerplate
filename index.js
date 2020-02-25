if (process.env.NODE_ENV === 'production') {
  module.exports = require('./main-core/lib/core.js');
} else {
  module.exports = require('./main-core/lib/core.js');
}
