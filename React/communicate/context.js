import {useContext} from 'react'
//创建一个全局上下文以供使用
const ContactContext = React.createContext('default')

class P extends React.Component{
    state = {
        context: new Date().getTime()
    }

    change = () =>{
        this.setState({
            context: new Date().getTime()
        })
    }

    render(){
        return <ContactContext.Provider value={this.state.context}>
            <C1></C1>
            <C2></C2>
            <C3></C3>
            <button onClick={this.change}> change </button>
            <ContactContext.Consumer>
                {value => '作为provider配置 消费的context的值；' + value}
            </ContactContext.Consumer>
        </ContactContext.Provider>
    }  
}

function C1(){
    return <div><ContactContext.Provider value={Math.random()}>c1:<C11></C11></ContactContext.Provider></div>
}

function C11(){
    return <ContactContext.Consumer>
        {value => 'c1 ContactContext.Consumer' + value}
    </ContactContext.Consumer>
}

class C2 extends React.Component {
    state ={
        context: Math.random().toFixed(3),
        use:false
    }
    // 指定 contextType 读取当前的 theme context。
    // React 会往上找到最近的 theme Provider，然后使用它的值。
    // 在这个例子中，当前的 theme 值为 “dark”。
    static contextType = ContactContext;

    change = () => {

        this.setState({
            context: Math.random().toFixed(3),
        })

    }
    render() {
      return <div>
          <p>c2 'Parent ContactContext.Consumer'  {this.context}</p>
          <ContactContext.Provider value={this.state.context}>自己配置的context {this.context}
            <ContactContext.Consumer>
                {value => 'c2 inner ContactContext.Consumer' + value}
            </ContactContext.Consumer>
          </ContactContext.Provider>
          <button onClick={this.change}>改</button>
          </div>;
    }
  }

  function C3(){
      const context = useContext(ContactContext)
      return <p>C3:{context}</p>
  }

  export default P