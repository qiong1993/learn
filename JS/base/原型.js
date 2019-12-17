//原型对象
function Person(name){
    this.name=name;
}

Person.prototype.printName=function(){
    alert(this.name);
}

var person1=new Person('Byron');
var person2=new Person('Frank');
console.log(person1)

//使用实例
//给原型对象增加函数
String.prototype.testChange = function () {
    return this.replace(/([A-Z])/g, '1').toLowerCase()
}

let a = 'AbCd';
a.testChange()
a