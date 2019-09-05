/**
 * 将值从一种类型转换为另一种类型通常称为类型转换
 * 
 */
var a = 42; 
 
var b = a + "";         // 隐式强制类型转换 
 
var c = String( a );    // 显式强制类型转换
/**
 * toString 处理非字符串到字符串的强制类型转换
 * 基本类型值的字符串化规则为：null 转换为 "null"，undefined 转换为 "undefined"，true 转换为 "true"。数字的字符串化则遵循通用规则
 * 对普通对象来说，除非自行定义，否则 toString()（Object.prototype.toString()）返回 内部属性 [[Class]] 的值
 * 数组的默认 toString() 方法经过了重新定义，将所有单元字符串化以后再用 "," 连接起 来
 * toString() 可以被显式调用，或者在需要字符串化时自动调用
 * 对大多数简单值来说，JSON 字符串化和 toString() 的效果基本相同，只不过序列化的结 果总是字符串
 * 所有安全的JSON 值（JSON-safe）都可以使用JSON.stringify(..) 字符串化
 * undefined、function、symbol （ES6+）和包含循环引用（对象之间相互引用，形成一个无限循环）的对象都不符合 JSON 结构标准，支持 JSON 的语言无法处理它们
 * JSON.stringify(..) 在对象中遇到 undefined、function 和 symbol 时会自动将其忽略，在 数组中则会返回 null
 * 
 */
let a = {a:1,b:2,c:[1,2,3],d:new Date()}
//向 JSON.stringify(..) 传递一个可选参数 replacer，它可以是数组或者函数，用 来指定对象序列化过程中哪些属性应该被处理，哪些应该被排除
console.log(JSON.stringify(a,['a','b','c'])) //{"a":1,"b":2,"c":[1,2,3]}
console.log(JSON.stringify(a,(k,v)=>{if(k!='c'){return v}}))//{"a":1,"b":2,"d":"2019-09-05T02:21:50.200Z"}
//JSON.string(..)可选参数 space，用来指定输出的缩进格式。space 为正整数时是指定 每一级缩进的字符数，它还可以是字符串，此时最前面的十个字符被用于每一级的缩
console.log(JSON.stringify(a,null,3))
console.log(JSON.stringify(a,null,'-------'))
//如果对象中定义了 toJSON() 方法，JSON 字符串化时会首先调用该方法，然后用它的返回 值来进行序列化
a.toJSON = function(){return {a:this.a}}
console.log(JSON.stringify(a)) //{"a":1}

/**
 * toNumber 将非数值转为数值
 * true 转换为 1，false 转换为 0。undefined 转换为 NaN，null 转换为 0
 * 处理失败 时返回 NaN
 * 对象（包括数组）会首先被转换为相应的基本类型值，如果返回的是非数字的基本类型 值，则再遵循以上规则将其强制转换为数字
 * 检查该值是否有 valueOf() 方法。 如果有并且返回基本类型值，就使用该值进行强制类型转换。如果没有就使用 toString() 的返回值（如果存在）来进行强制类型转换
 * 如果 valueOf() 和 toString() 均不返回基本类型值，会产生 TypeError 错误。
 * 使用 Object.create(null) 创建的对象 [[Prototype]] 属性为 null，并且没 有 valueOf() 和 toString() 方法，因此无法进行强制类型转换。
 */
var a = {     valueOf: function(){         return "42";     } }; 
 
var b = {     toString: function(){         return "42";     } }; 
 
var c = [4,2]; c.toString = function(){     return this.join( "" );  }; 
 
Number( a );                // 42 
Number( b );                // 42 
Number( c );                // 42 
Number( "" );               // 0 
Number( [] );               // 0 
Number( [ "abc" ] );        // NaN

/**
 * ToBoolean 
 * 假值：undefined • null • false • +0、-0 和 NaN • ""
 * 假值列表以 外的值都是真值
 */
var a = new Boolean( false ); var b = new Number( 0 ); var c = new String( "" );
console.log(a&&b&&c ? true : false) //true
//假值对象:浏览器在某些特定情况下，在常规JavaScript 语法基础上自己创建了一些外来值
Boolean(document.all) //false
//解析数字字符串
parseInt(1/0,19)            //18   (1/0 结果为Infinity 19进制的有效数字字符范围是0~9 a~i)
parseInt( 0.000008 );       // 0   ("0" 来自于 "0.000008") 
parseInt( 0.0000008 );      // 8   ("8" 来自于 "8e-7") 
parseInt( false, 16 );      // 250 ("fa" 来自于 "false") 
parseInt( parseInt, 16 );   // 15  ("f" 来自于 "function..") 
parseInt( "0x10" );         // 16 
parseInt( "103", 2 );       // 2

//|| 和 &&  选择器运算符 返回值是两个操作数中的一个
console.log(1||2)//1
console.log(0||2)//2
console.log(1&&2)//2
console.log(0&&2)//0
//== 允许在相等比较中进行强制类型转换，而 === 不允许 对象的比较先调用 ToPromitive 抽象操作 valueOf() toString()
['foo'] == 'foo' //true
// 有数值类型时 都转换为数值比较
console.log('1' == 1) //true
console.log([1] == 1) //true
//boolean 转为number后比较
console.log(true == 1) //true
console.log(true == '1') //true
console.log(true == 2) //false

console.log(undefined == null) //true


