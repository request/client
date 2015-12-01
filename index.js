
var request = require('@request/core')


function client (options) {
  if (options.end === undefined) {
    options.end = true
  }
  return request(options)
}

module.exports = client
