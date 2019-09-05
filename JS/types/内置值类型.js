/**
 * 数组
 * 可以容纳任何类型的值
 */
let arrayA = [1,'2',[3,4,5]]
console.log(arrayA.length) //3
/**
 * “稀疏”数组（sparse array，即含有空白或空缺单元的数组
 */
arrayA[5] = 6
console.log(arrayA.length) //6
console.log(arrayA[4]) //undefined
//数组也是对象，也可以包含字符串键值和属性，但是不计入length计算
arrayA['name'] = '属性'
console.log(arrayA.length) //6
//如果字符串键值能够被强制类型转换为十进制数字的话，它就会被当作数字索引来处理。
arrayA['7'] = '7'
console.log(arrayA.length) //8

/**
 * 类数组 
 * eg:arguments;document.getElementsByTagName('li')
 */
function fn(){
    const args1 = Array.prototype.slice.apply(arguments)
    //ES6
    const args2 = Array.from(arguments)
    console.log('arguments',Object.prototype.toString.call( arguments),arguments)
    console.log('args1',Object.prototype.toString.call(args1),args1)
    console.log('args2',Object.prototype.toString.call(args2),args2)
}
fn(1,2,3)
/**
 * 字符串
 * 有类似字符串数组的操作 但字符串是不可变的:字符串的成员函数不会改变其原始值，而是创建并返回一个新的字符串
 */
let str1 = 'foo'
console.log(str1.length)//3
console.log(str1.indexOf('o'))//1
console.log(str1.concat('bar'))//foobar
console.log(str1.charAt(1),str1[1])//o o str1[1]并非总是合法，只能取值 赋值无效
//可借用数组的非改变函数
console.log(Array.prototype.join.apply(str1,['-']))//f-o-o
console.log(Array.prototype.map.call(str1,item=>item.toUpperCase()).join('-'))//F-O-O
//数组的改变函数不能借用
let arryStr = ['f','o','o']
//数组的改变函数
console.log(arryStr.reverse())//[ 'o', 'o', 'f' ]
console.log(str1.split('').reverse().join(''))//oof
console.log(Array.prototype.reverse.call(str1)) //TypeError: Cannot assign to read only property '0' of object

/**
 * 数字 number
 * 数字类型是基 于 IEEE 754 标准（“浮点数”）来实现的 
 * JavaScript采用的是双精度格式
 * 数字常量一般用十进制表示
 */
//特别大和特别小的数字默认用指数格式显示
let a = 5E10;//5*10^10
console.log(a)//50000000000
console.log(a.toExponential())//5e+10
console.log(a*a)//2.5e+21
console.log(1/a)//2e-11
//数值能用Number进行封装 所以能调用Number.prototype中的方法
console.log((12).toFixed(2))//12.00
//二进制
0b11110011 == 0B11110011 == 243//2^7+2^6+2^5+2^4+2^1+2^0=243
//八进制
0o363 == 0O363 == 243//3*8^2+6*8^1+3*8^0 =343
//十六进制
0xf3 == 0Xf3 == 243//15*16+3 = 343
//二进制浮点数的比较 精度问题
console.log(0.1+0.2 == 0.3)//false 即0.30000000000000004 == 0.3
//机器精度 (误差范围) ES6
console.log(Number.EPSILON)//2^-52 2.220446049250313e-16
//在指定的误差范围内比较是否相等
function numbersCloseEnoughToEqual(a,b){
    return Math.abs(a-b) < Number.EPSILON
}
console.log(numbersCloseEnoughToEqual(0.1+0.2,0.3))//true
console.log(numbersCloseEnoughToEqual(0.00000000000001,0.00000000000002))//false

console.log('浮点数的范围：',Number.MIN_VALUE,'-',Number.MAX_VALUE)
//JavaScript 的数字类型无法精确呈现 64 位数值，所以必须将它们保存（转换）为字符串 53位
console.log('整数的安全范围：',Number.MIN_SAFE_INTEGER,'-',Number.MAX_SAFE_INTEGER)
//检测是否整数
console.log(Number.isInteger(43.00)) //true ES6
console.log(Number.isInteger(43.01)) //false
console.log(Number.isSafeInteger(Math.pow(2,53))) //false
console.log(Number.isSafeInteger(Math.pow(2,53) -1)) //true
if(!Number.isInteger){
    Number.isInteger = function(num){
        return typeof num == 'number' && num%1==0
    }
}
if(!Number.isSafeInteger){
    Number.isSafeInteger = function(num){
        return Number.isInteger(num) && 
            Math.abs(num) <= Number.MAX_SAFE_INTEGER
    }
}
//某些数字操作的，比如数位操作只能到32位
console.log( 24 | 1) //数位运算符 | 只适用于 32 位 整数（它只关心 32 位以内的值，其他的数位将被忽略
//ECMAScript 整数有两种类型，即有符号整数（允许用正数和负数）和无符号整数（只允许用正数）所有整数字面量都默认存储为有符号整数。只有 ECMAScript 的位运算符才能创建无符号整数。
//有符号整数使用 31 位表示整数的数值，用第 32 位表示整数的符号，0 表示正数，1 表示负数。数值范围从 -2147483648 到 2147483647
console.log((18).toString(2))//10010 以真二进制形式存储的 0000 0000 0000 0000 0000 0000 0001 0010
/**
 * 二进制补码 1111 1111 1111 1111 1111 1111 1110 1110
 * 该数字的非负版本的二进制表示→0000 0000 0000 0000 0000 0000 0001 0010 
 * 计算二进制反码→1111 1111 1111 1111 1111 1111 1110 1101
 * 在二进制反码上加 1→1111 1111 1111 1111 1111 1111 1110 1110
 */
console.log((-18).toString(2))//-10010 

/**
 * 特殊数值
 */
null,undefined//内置标识符
//undefined 在非严格模式下可以被赋值
undefined = 'kong'
//表达式 void ___ 没有返回值，因此返回结果是 undefined
console.log(void 1,1)//undefined 1
//NaN不是数字的数字  数学运算的操作数不是数字类型就会返回NaN
var a = 2 / "foo"; 
console.log(a,typeof a === "number")//  NaN  true
//NaN 是一个特殊值，它和自身不相等
console.log(NaN == NaN) //false
console.log(isNaN('foo')) //true
if(!Number.isNaN){
    Number.isNaN = function(num){
        return typeof num == 'number' && isNaN(num)
        return num !== num //。NaN 是 JavaScript 中唯 一一个不等于自身的值。
    }
}
Infinity //无穷数
let a = 0*-1// -0
let b = 0*1// 0
console.log(a,b,a==b,a===b) //-0,0,true,true
console.log(JSON.stringify(-0), JSON.parse("-0") )// 0 ,-0
//ES6 判断特殊类型
console.log(Object.is(1/'foo',NaN)) //true
console.log(Object.is(0,-0)) //false