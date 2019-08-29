import React from 'react'

class DemoComponent extends React.Component{
    /**构造函数，最先执行 state初始化 执行一次 →挂载阶段*/
    constructor(props){
        super(props)
        this.state = {}
    }
    //react17之后将被废弃 组件挂载前执行 →挂载阶段
    componentWillMount(){}
    //react17之后将被废弃props有更新时执行 prop,state有更新时→更新阶段
    componentWillReceiveProps(){}
    //react17之后将被废弃 组件更新前执行→更新阶段
    componentWillUpdate(){}
    //从props获取到类的分发 prop,state有更新时→挂载阶段，更新阶段
    static getDerivedStateFromProps(nextProps, prevState){return null}
    //判断触发重新渲染 prop,state有更新时→更新阶段
    shouldComponentUpdate(nextProps, nextState){} 
    //纯函数 返回需要渲染元素→挂载阶段，更新阶段
    render(){
        return <div>demo component</div>
    }
    //函数有一个返回值，会作为第三个参数传给componentDidUpdate→更新阶段
    getSnapshotBeforeUpdate(prevProps, prevState){}
    //react17组件更新后执行 →更新阶段
    componentDidUpdate(prevProps, prevState, snapshot){}
    //组件挂载后执行 →挂载阶段
    componentDidMount(){}
    //组件卸载之前执行→卸载阶段
    componentWillUnmount(){}
}

export default DemoComponent