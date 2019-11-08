let p1 = new Promise((resolve,reject)=>{
    const time = Date.now()
    console.log('time',time)
    resolve(time)
})

p1.then(data=>console.log('then1:',data))
p1.then(data=>console.log('then2:',data))


function delay(time) {      return new Promise( function(resolve,reject){          
    setTimeout( resolve, time );      } );  }  
 
delay( 1000 ) // 步骤1  
.then( function STEP2(){      
    console.log( "step 2 (after 100ms)" );      
    return delay( 2000 );  } )  
    .then( function STEP3(){      
        console.log( "step 3 (after another 200ms)" );  } )  
        .then( function STEP4(){      
            console.log( "step 4 (next Job)" );      
            return delay( 5000 );  } )  
            .then( function STEP5(){      
                console.log( "step 5 (after another 50ms)" );  } )

let p1 = new Promise((resolve,reject) => setTimeout(()=>{
    console.log('reject...')
    reject()
}),3000)
let p2 = new Promise((resolve,reject) => setTimeout(()=>{
    console.log('resolve...')
    resolve()
}),4000)
Promise.all([p1,p2]).then(null,()=> console.log('all....'))