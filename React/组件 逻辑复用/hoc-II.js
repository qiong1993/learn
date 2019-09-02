/**
 * Inheritance Inversion 反向继承 
 * 返回的 HOC 类（Enhancer）继承了 
 * WrappedComponent Inheritance Inversion 允许 HOC 通过 this 访问到 WrappedComponent，意味着它可以访问到 state、props、组件生命周期方法和 render 方法。
 */
function iiHOC(WrappedComponent) {
    return class Enhancer extends WrappedComponent {
        render() {
        return super.render()
        }
    }
}

/**
 * 渲染劫持（Render Highjacking）
 * 在由 render输出的任何 React 元素中读取、添加、编辑、删除 props
 * 读取和修改由 render 输出的 React 元素树
 * 有条件地渲染元素树
 * 把样式包裹进元素树（就像在 Props Proxy 中的那样） 
 */
function iiHOC(WrappedComponent){
    return class Enhancer extends WrappedComponent{
        render(){
            const elementTree = super.render()
            let newProps = {}
            if(elementTree && elementTree.type=='input'){
                newProps = {value: 'new'}
            }
            const props = {...elementTree.props,newProps}
            const newElementsTree = React.cloneElement(elementTree,props,elementTree.props.children)
            return newElementsTree
        }
    }
}


