//ES6 Version
//module.exports = (str) => [...document.querySelectorAll(str)];

//ES5 Version
module.exports = function (str){
  return [].slice.call(document.querySelectorAll(str));
}
