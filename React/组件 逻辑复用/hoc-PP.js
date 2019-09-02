/**
 * 高阶组件（HOC）
 * hocFactory:: W:React.component => E:React.component
 * 缺陷:
 * 扩展性限制: HOC 无法从外部访问子组件的 State因此无法通过shouldComponentUpdate滤掉不必要的更新,React 在支持 ES6 Class 之后提供了React.PureComponent来解决这个问题
 * Ref 传递问题: Ref 被隔断,后来的React.forwardRef 来解决这个问题
 * Wrapper Hell: HOC可能出现多层包裹组件的情况,多层抽象同样增加了复杂度和理解成本
 * 命名冲突: 如果高阶组件多次嵌套,没有使用命名空间的话会产生冲突,然后覆盖老属性
 * 不可见性: HOC相当于在原有组件外层再包装一个组件,你压根不知道外层的包装是啥,对于你是黑盒
 */

 /**
  * Props Proxy 属性代理
  * HOC对传入WrappedComponent  W 的props进行操作
  */
 function ppHOC(WrappedComponent){
     return class PP extends React.component{
        render(){
            const newProps = {
                user: currentLoggedInUser
            }
            return <WrappedComponent {...this.props} {...newProps}></WrappedComponent>
        }
     }
 }

 //通过refs访问组件实例
 function refsHOC(WrappedComponent){
    return class RefsHOC extends React.component{
        proc(WrappedComponentInstance){
            WrappedComponentInstance.method
        }

        render(){
           const props = {
               ...this.props,
               ref:this.proc.bind(this)
           }
           return <WrappedComponent {...props}></WrappedComponent>
       }
    }
}

//提取states
function stateHOC(WrappedComponent){
    return class PP extends React.component{

        state = {name:''}

        onNameChange = e => {
            this.setState({name:e.target.value})
        }

        render(){
            const newProps = {
                value:this.state.name,
                onChange:this.onNameChange
            }
            return <WrappedComponent {...this.props} name={newProps}></WrappedComponent>
        }
    }
}

//@stateHOC
function TestComponent(props){
    return <input {...props.name}></input>
}

stateHOC(TestComponent)


//封装样式、布局或别的目的，你可以用其它组件和元素包裹 WrappedComponent
function ppHOC(WrappedComponent) {
    return class PP extends React.Component {
      render() {
        return (
          <div style={{display: 'block'}}>
            <WrappedComponent {...this.props}/>
          </div>
        )
      }
    }
  }