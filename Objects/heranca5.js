const { fuchsia } = require("color-name");
const { string } = require("yargs");

console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function (){
  return this.split('').reverse().join('')
}

console.log('Teste Deivid'.reverse())