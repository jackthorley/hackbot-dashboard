if (process.env.NODE_ENV !== 'production') {
  module.exports = require('./webpack.dev')
} else {
  module.exports = require('./webpack.prod')
}