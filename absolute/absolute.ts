var path = require('path');

module.exports = path.isAbsolute ? path.isAbsolute.bind(path) : absolute;

function absolute(s : any) : any {
  return path.resolve(s) === s;
}