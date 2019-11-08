/**
 * prototype 原型属性是函数独有属性
 */
function A(){}

let a = new A()

a.constructor === A
A.constructor === Function
Function.constructor === Function
Object.constructor === Function

a.__proto__ === A.prototype
A.__proto__ === Function.prototype
Function.__proto__ === Function.prototype
Object.__proto__===Function.prototype


a.__proto__ === A.prototype
A.prototype.__proto__ === Object.prototype
Object.prototype.__proto__ === null


function B(){return {}}
let b =new B()
let b1 = B()

b.__proto__ === Object.prototype
b1.__proto__ === Object.prototype
