class DemoComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {inputStr:'双向绑定的输入'}
        console.log('//构造函数，最先执行 state初始化 执行一次 →挂载阶段')
    }
    
    // componentWillMount(){console.log('react17之后将被废弃 组件挂载前执行 →挂载阶段')}
    
    // componentWillReceiveProps(){console.log('//react17之后将被废弃props有更新时执行 prop,state有更新时→更新阶段')}
    
    // componentWillUpdate(){console.log('//react17之后将被废弃 组件更新前执行→更新阶段')}
    
    static getDerivedStateFromProps(nextProps, prevState){console.log('//从props获取到类的分发 prop,state有更新时→挂载阶段，更新阶段1',nextProps, prevState);return null}
    
    shouldComponentUpdate(nextProps, nextState){console.log('//判断触发重新渲染 prop,state有更新时→更新阶段2');return true} 
    
    updateInputStr = (event) => {
        this.setState({inputStr:event.target.value})
    }

    //纯函数 返回需要渲染元素→挂载阶段，更新阶段
    render(){
        return <div>
            <input defaultValue={this.state.inputStr} onChange={this.updateInputStr}></input>
            <p>{this.state.inputStr}</p>
        </div>
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState){console.log('//函数有一个返回值，会作为第三个参数传给componentDidUpdate→更新阶段3');return {}}
    
    componentDidUpdate(prevProps, prevState, snapshot){console.log('//react17组件更新后执行 →更新阶段4')}
    
    componentDidMount(){console.log('//组件挂载后执行 →挂载阶段')}
    
    componentWillUnmount(){console.log('//组件卸载之前执行→卸载阶段')}
}

export default DemoComponent