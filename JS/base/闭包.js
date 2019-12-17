//闭包 定义在一个函数内部的函数
function f1(){

　　　　var n=999;

　　　　function f2(){
　　　　　　alert(n); 
　　　　}

　　　　return f2;

}

var result=f1();

result(); // 999



/**闭包的用途 
 * f1是f2的父函数，而f2被赋给了一个全局变量，这导致f2始终在内存中，而f2的存在依赖于f1，因此f1也始终在内存中，不会在调用结束后，被垃圾回收机制（garbage collection）回收
 * nAdd是一个全局变量
 * 
 * */
function f1(){

　　　　var n=999;

　　　　nAdd=function(){n+=1}

　　　　function f2(){
　　　　　　alert(n);
　　　　}

　　　　return f2;

}

var result=f1();

result(); // 999

nAdd();

result(); // 1000