/**hook react16.8的新增特性
 * 只在最顶层使用 Hook（不要在循环，条件或嵌套函数中调用 Hook）
 * 只在 React 函数中调用 Hook
 * React 靠的是 Hook 调用的顺序 知道哪个 state 对应哪个 useState
 */
import {useState,useEffect} from 'react'

function HOOKDEMO(){
    const [count,setCount] = useState(0)
    /**
     * 每次渲染后执行 每次重新渲染，都会生成新的 effect，替换掉之前的
     * 解决 class 中生命周期函数经常包含不相关的逻辑，但又把相关逻辑分离到了几个不同方法中的问题
     * React 将按照 effect 声明的顺序依次调用组件中的每一个 effect
     * effect 在每次重渲染时都会执行
     * 会在调用一个新的 effect 之前对前一个 effect 进行清理
     * React 会等待浏览器完成画面渲染之后才会延迟调用 useEffect
     */
    useEffect(() => {
        document.title = 'current count ' + count
        //在执行当前 effect 之前对上一个 effect 进行清除
        return function cleanup(){
            console('清除机制 组件被卸载时执行 通常用来执行清理有副作用的操作 订阅的退订 定时器的关闭')
        }
    },
    [count] //React 将对前一次渲染的和后一次渲染的值进行比较,若数组中的所有元素都是相等的，React 会跳过这个 effect，实现性能的优化
    //如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数。这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。
    )

    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

function useUserState(){
    const [name,setName] = useState(Math.random().toFixed(3))
    useEffect(()=>{
        console.log('effect执行')
        return () => {
            console.log('清除副作用执行')
        }
    })

    return {name,setName}   
}

function C(){
    const {name,setName} = useUserState()
    return (
        <div>
            <p>name: {name}</p>
            <input onChange={e=>setName(e.target.value)}></input>
        </div>
    )
}

function P(){
    return (
        <div>
            c1:<C></C>
            c2:<C></C>
        </div>
    )

}

export default P