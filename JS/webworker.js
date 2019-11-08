const worker = new Worker(function(){
    postMessage('im child worker')
    this.onmessage = (msg) => {
        console.log('child worker reciver msg:',msg)
    }
})

worker.onmessage = (msg) => {
    console.log('child worker reciver msg:',msg)
}

worker.postMessage('im main theard')