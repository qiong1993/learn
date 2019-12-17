//作用域取值
var b1 = "b1";

function ftn1(){

    console.log(this);// 运行结果： window

    //!!作用域中声明提前
    if (false) {
        var a = 1;
        let b = 2;
        const c = 2;
    }
    console.log(a);  //undefined
    //console.log(b)
    //console.log(c)
    //!!重复定义
    var b2 = "b2";
    //var b2 = "b2t";

    var b1 = "bbb";

    function ftn2(b2){

        console.log(this);

        var b3 = "b3";

        b2 = b1;

        b1 = b3;

        console.log("b1:" + b1 + ";b2:" + b2 + ";b3:" + b3);// 运行结果：b1:b3;b2:bbb;b3:b3

    }

    ftn2(b2);
    console.log("b1:" + b1 + ";b2:" + b2 );//b1:b3;b2:b2

}

ftn1();
console.log("b1:" + b1);// 运行结果：b1:b1


//函数变量的声明中，函数变量会覆盖以前声明过的同名声明。普通变量的声明，不会覆盖以前的同名参数
function add(num1, fun2) {
    function fun2() {
        var x = 2;
    }
    var num1
    var num1 = 2
    console.log('num1', num1); //number  
    console.log(fun2.toString()) //functon fun2(){ var x=2;}
}
add(1, function () {
    var x = 1
}); 


//变量声明
console.log(ftn01);//ftn01()  
console.log(ftn02);// undefined
var name = 'test'
function ftn01(){
    console.log("I am ftn01!");
    console.log("this name",this.name);
}
var ftn02 = function(){
    console.log("I am ftn02!");
}
ftn01()

