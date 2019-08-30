import {useState,useEffect} from 'react'

class EventEmitter{
    constructor(){
        this.listers={}
    }

    bind =(type,fn) => {
        if(!this.listers[type])this.listers[type] =[]
        this.listers[type].push(fn)
    }

    emit = (type,data) => {
        const listerList = this.listers[type] ? this.listers[type]:[]
        for(let fn of listerList){
            fn(data)
        }
    }

    remove = (type,fn) => {
        const listerList = this.listers[type] ? this.listers[type]:[]
        for(let index in listerList){
            if(listerList[index] == fn)listerList.splice(index,1)
        }
    }
}

const eventEmitter = new EventEmitter()

function C(){
    return (
        <div>
            C:<input onChange={e => eventEmitter.emit('value',e.target.value)}></input>
        </div>
    )
}

function C1(){
    const [listerValue,setListerValue] = useState()
    const setValue = data=>{
        setListerValue(data)
    }
    useEffect(()=>{
        console.log('执行useEffect')
        eventEmitter.bind('value', setValue)
        return () => {
            console.log('执行useEffec副作用清理')
            eventEmitter.remove('value',setValue)
        }
    },[listerValue])

    return (
        <div>
            C1 value值{listerValue}
        </div>
    )
}

function P(){
    return <>
        <C></C>
        <C1></C1>
    </>
}

export default P