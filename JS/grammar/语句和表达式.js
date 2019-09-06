/**
 * 语句相当于句子，表达式相当于短语，运算符则相当于标点 符号和连接词。
 * JavaScript 中表达式可以返回一个结果
 */
var a = 1,b //声明语句
b = a //赋值表达式
b //表达式语句

//语句都有一个结果值
b = 18 //返回值为18
var c = 19 //但规范定义 var 的结果值是 undefined
//如代码块 { .. } 的结果值是其最后一个语句 / 表达式的结果
{let a=11;a}
//语法不允许我们获得语句的结果值并将其赋值给另一个变量 获得语句的结果值可以使用万恶的 eval(..)
let a = eval("if (true) { b = 4 + 38; }")//42
//ES7 规范有一项“do 表达式”（do expression）提案，
//a = do {     if (true) {         b = 4 + 38;      } }

/**
 * 副作用
 * 递增运算符 ++ 和递减运算符 -- ：++ 在前面时，它的副作用（将 a 递增）产生在表达式返回结果值之前，而 a++ 的 副作用则产生在之后。
 * 
 */
b = ( a++, a ); // 语句系列逗号运算符将语法多个独立的表达式语句串联成一个语句
