class C extends React.Component{

    state = {
        count:0
    }

    addCount = () => {
        let {count} = this.state
        count++
        this.setState({count})
    }

    render(){
        return <p>C count:{this.state.count}</p>
    }

}

class P extends React.Component{

    cContent = React.createRef()

    updateCContent = () => {
        this.cContent.current.addCount()
    }

    render(){
        return <><C ref={this.cContent}></C><button onClick={this.updateCContent}>update</button></>
    }
}

export default P