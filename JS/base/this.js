/**通过字面量方式定义对象 */
var name = 'test'
var obj = {
    name:"xtq",
    say: function (){
        console.log('this',this," name",this.name)
    }
};
obj.say()
/**
 * 
 * new操作符会让构造函数产生如下变化：

　　1.       创建一个新对象；

　　2.       将构造函数的作用域赋给新对象（因此this就指向了这个新对象）；

　　3.       执行构造函数中的代码（为这个新对象添加属性）；

　　4.       返回新对象
 */
function Person(name,sex,age,job){
    this.name = name;
    this.sex = sex;
    this.age = age;
    this.job = job;
    this.showPerson = function(){
        console.log("姓名:" + this.name);
        console.log("性别:" + this.sex);
        console.log("年龄:" + this.age);
        console.log("工作:" + this.job);
        console.log(this);// Person { name="马云", sex="男", age=46, 更多...}
        testFtn()
    }
    /**声明函数都会在全局作用域构造时候完成 */
    function testFtn(){
        console.log('function',this);
    }
}
var person = new Person("马云", "男", 46, "董事长");
person.showPerson();

//Call和apply是将this指针指向方法的第一个参数
var name = "sharpxiajun";
function ftn(name){
    console.log(name);
    console.log(this.name);
}
ftn("101");
var obj = {
    name:"xtq"
};
ftn.call(obj,"102");

//定义对象里的方法里传入函数
var name = "I am window";
var obj = {
    name:"sharpxiajun",
    job:"Software",
    ftn01:function(obj){
        obj.show();
    },
    ftn02:function(ftn){
        ftn();
    },
    ftn03:function(ftn){
        ftn.call(this);
    }
};
function Person(name){
    this.name = name;
    this.show = function(){
        console.log("姓名:" + this.name);
        console.log(this);
    }
}
var p = new Person("Person");
obj.ftn01(p);
obj.ftn02(function(){
   console.log(this.name);
   console.log(this);
});
obj.ftn03(function(){
    console.log(this.name);
    console.log(this);
})




//node 环境的不同
console.log(this === exports)
function myTest() {
    console.log(this === global);
    console.log(this === exports);
}
myTest();

/**箭头函数 */
function foo() {
    setTimeout(function(){
        console.log('id:', this.id);
    }, 100);
}
  
var id = 21;

foo.call({ id: 42 });
//转换后
function foo() {
    setTimeout(() => {
        console.log('id:', this.id);
    }, 100);
}
  
var id = 21;

foo.call({ id: 42 });


function foo() {
    let testFn = function(){
        console.log('id:', this.id);
    }
    setTimeout(testFn, 100);
}
  
var id = 21;

foo.call({ id: 42 });

//间歇调用
var a=5;
 
function foo() {
  this.a++;
    setInterval(function(){
        console.log(++this.a);
    },1000);
}
 
var obj={
    a:2
};
foo.call(obj);
console.log(obj.a);
//3 6 7 8 9·····

