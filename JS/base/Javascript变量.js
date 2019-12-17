//函数传递参数  本质就是外部的变量复制到函数参数的变量里
function testFtn(a,pObj){

    console.log(this)
    console.log(a);// 运行结果：new Name

    console.log(pObj.oName);// 运行结果：new obj

    a = "change name";

    pObj.oName = "change obj";

}

var a = "new Name";

var pObj = {oName:"new obj"};

testFtn(a,pObj);

console.log(a);// 运行结果：new Name

console.log(pObj.oName);// 运行结果：change obj