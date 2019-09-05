/**
 * JavaScript 为基本数据类型值提供了封装对象，称为原生函数（如 String、Number、Boolean 等）。它们为基本数据类型值提供了该子类型所特有的方法和属性
 * 对于简单标量基本类型值，比如 "abc"，如果要访问它的 length 属性或 String.prototype 方法，JavaScript 引擎会自动对该值进行封装（即用相应类型的封装对象来包装它）来实 现对这些属性和方法的访问。
 */
//对象（如数组）都包含一个内部属性 [[Class]]。这个属性无法直接访问， 一般通过 Object.prototype.toString(..) 来查看
let array = [1,2,3]
console.log(array.toString())
console.log(Object.prototype.toString.call(array))
let obj = {a:1}
console.log(obj.toString())
console.log(Object.prototype.toString.call(obj))

Object.prototype.toString.call( null ); // "[object Null]" 
 
Object.prototype.toString.call( undefined ); // "[object Undefined]"

Object.prototype.toString.call( "abc" ); // "[object String]" 
 
Object.prototype.toString.call( 42 ); // "[object Number]" 
 
Object.prototype.toString.call( true ); // "[object Boolean]"
