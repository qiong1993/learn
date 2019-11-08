/**
 * 事件循环
 * eventLoop是一个用作队列的数组
 * 先进，先出
 * while 循环实现的持续运行的循环，循环的每一轮称为一个tick
 */
let eventLoop = [];
let event;
//“永远”执行
while(true){
    if(eventLoop.length>0){
        event = eventLoop.shift()
        try{
            event()
        }catch (err){
            reportError(err); 
        }
    }
}

/**
 * 调度任务
 * 结果为A C D B
 * 任务处理是在当前 事件循环 tick 结尾处，且定时器触发是为了调度下一个事件循环 tick
 * Promise 的异步特性是基于任务的
 */
console.log( "A" );  
 
setTimeout( function(){      
    console.log( "B" );  
}, 0 );  
 
// 理论上的"任务API"  
schedule( function(){      
    console.log( "C" );  
    schedule( function(){          
        console.log( "D" );      
    } );  
} ); 
