class Parent extends React.Component{

    state = {
        pName:'父组件'
    }

    changPChild1Name = (target,value) => {
        this.setState({[target]:value})
    }


    render(){
        const {state,changPChild1Name} = this
        return <div>
            <h4>我是父组件state的内容→{Object.keys(state).map(key=>key+':'+state[key]+" ")}</h4>
            
            <Child1 pName={state.pName} changPChild1Name={changPChild1Name}></Child1>
            <Child2 pName={state.pName} changPChild1Name={changPChild1Name}></Child2>
        </div>
    } 

}

function Child1({pName,changPChild1Name}){
    //通过调用父组件中的回调函数将数据传递给父组件
    const changPParam = (event) =>{
        const value = event.target.value
        changPChild1Name('child1',value)
    }


    return <div>
        <p>我是子组件一</p>
        <p>pName:{pName}</p>
        <input onChange={changPParam}></input>
    </div>
    

}

function Child2({pName,changPChild1Name}){
    //通过共同的父组件进行参数传递
    const changPParam = (event) =>{
        const value = event.target.value
        changPChild1Name('pName',value)
    }


    return <div>
        <p>我是子组件二 改pName啦</p>
        <p>pName:{pName}</p>
        <input onChange={changPParam}></input>
    </div>
    

}

export default Parent