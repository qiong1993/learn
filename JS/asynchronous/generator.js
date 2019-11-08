
/**
 * generator 生成器
 */
let x = 0
function *foo(){
    console.log('start:',x,Date.now())
    x++;
    yield;
    console.log('end:',x,Date.now())
}
function bar(){
    x++
}
console.log('1',x,Date.now())
const it = foo()
console.log('2',x,Date.now())
it.next()
console.log('3',x,Date.now())
bar()
console.log('4',x,Date.now())
it.next()
console.log('5',x,Date.now())

//交替运行代码
function *foo() {      
    a++;      
    yield;      
    b = b * a;     
    a = (yield b) + 3;  
}  
 
function *bar() {      
    b--;      
    yield;      
    a = (yield 8) + b;      
    b = a * (yield 2);  
}

function step(gen){
    let it = gen();
    var last;
    return function(){
        last = it.next(last).value;
    }
}

// 确保重新设置a和b  
a = 1;  b = 2;  
 
var s1 = step( foo );  var s2 = step( bar );  
 
// 首次运行*foo() 
s1(); // 2 2 undefined
s1(); // 2 4 4
s1(); // 7 4 undefined
 
// 现在运行*bar()  
s2(); //7 3 undefined
s2(); //7 3 8
s2(); //11 3 2
s2(); //11 22 undefined 
 
console.log( a, b );  //11 22

//生成器 +Promise 协同运作模式
function run(gen){
    const it = gen.apply(this,arguments)

    return Promise.resolve().then(
        function handleNext(value){
            let next = it.next(value)
            console.log('!!!!! value',value)
            return (function handleResult(next){
                console.log('next value',next)
                if(next.done){
                    return next.value
                }else{
                    return Promise.resolve(next.value).then(
                        handleNext,
                        function handleError(err){
                            return Promise.resolve(it.throw(err)).then(handleResult)
                        }
                    )
                }
            })(next)
        }
    )
}

const a = (time) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const timeN = Date.now()
            console.log(time,':',timeN)
            resolve(time)
        },time)
    })
}

function *main(){
    console.log('main start')
    yield
    console.log('empty')
    const a1 = yield a(1000)
    console.log('a1：', a1)
    const a2 = yield a(2000)
    console.log('a2：', a2)
    const a3 = yield a(3000)
    console.log('a3：', a3)
}

run(main)
