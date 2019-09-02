/**
 * 缺陷:
 * 使用繁琐: HOC使用只需要借助装饰器语法通常一行代码就可以进行复用,Render Props无法做到如此简单
 * 嵌套过深: Render Props虽然摆脱了组件多层嵌套的问题,但是转化为了函数回调的嵌套
 */
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
// 与 HOC 不同，我们可以使用具有 render prop 的普通组件来共享代码
class Mouse extends React.Component {
  static propTypes = {
    render: PropTypes.func.isRequired
  }
  state = { x: 0, y: 0 }
  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }
  render() {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    )
  }
}
const App = React.createClass({
  render() {
    return (
      <div style={{ height: '100%' }}>
        <Mouse render={({ x, y }) => (
          // render prop 给了我们所需要的 state 来渲染我们想要的
          <h1>The mouse position is ({x}, {y})</h1>
        )}/>
      </div>
    )
  }
})
ReactDOM.render(<App/>, document.getElementById('app'))