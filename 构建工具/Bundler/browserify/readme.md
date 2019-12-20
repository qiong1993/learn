将CommonJS语法进行装换 使得浏览器端使用CommonJS规范（require--module.export）的格式组织代码成为可能
// add.js
module.exports = function(a, b) {
  return a + b
};

// test.js
var add = require('./add.js');
console.log(add(1, 2));  // 3

browserify test.js > bundle.js