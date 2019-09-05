/**
 * JavaScript的变量没有类型，只有值才有,类型定义了值的行为特征。变量可以随时持有任何类型的值。
 * 对变量执行 typeof 操作时，得到的结果并不是该变量的类型，而是该变量持有的值的类 型
 */

 /**
 * 基本数据类型：null undefined boolean number string object symbol
 * 使用typeof可用于判断基本数据类型
 */
console.log(typeof undefined) //undefined
console.log(typeof 13)//number
console.log(typeof '13')//string
console.log(typeof Symbol(1))//symbol
//null类型的处理为object了
console.log(typeof null)//object
console.log(!null && typeof null == 'object')//true null的判断

console.log(typeof {a:1})//object
console.log(typeof [1,2])//object
/**
 * function 作为object的一种子类型被进行了特殊的处理
 * 有一个内部属性 [[Call]]，该属性使其可以被调用
 * 函数对象的 length 属性是其声明的参数的个数
 */
console.log(typeof function(){})//function

/**
 * undefined与undeclared
 * undefined 已声明未赋值
 * undeclared 未声明
 * 
 */
var a 
console.log(a) //undefined
console.log(b) //ReferenceError: b is not defined
//typeof的特殊处理
var a 
console.log(typeof a) //undefined
console.log(typeof b) //undefined

