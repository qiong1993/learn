/**
 * 缺陷：
 * 组件与 Mixin 之间存在隐式依赖（Mixin 经常依赖组件的特定方法，但在定义组件时并不知道这种依赖关系）
 * 多个 Mixin 之间可能产生冲突（比如定义了相同的state字段）
 * Mixin 倾向于增加更多状态，这降低了应用的可预测性（The more state in your application, the harder it is to reason about it.），导致复杂度剧增
 * 隐式依赖导致依赖关系不透明，维护成本和理解成本迅速攀升：
 * 难以快速理解组件行为，需要全盘了解所有依赖 Mixin 的扩展行为，及其之间的相互影响
 * 组价自身的方法和state字段不敢轻易删改，因为难以确定有没有 Mixin 依赖它
 * Mixin 也难以维护，因为 Mixin 逻辑最后会被打平合并到一起，很难搞清楚一个 Mixin 的输入输出
 */
import React from 'react'
import ReactDOM from 'react-dom'

// 我们可以将样板代码放入到一个 mixin 中，这样其他组件就能共享这些代码
const MouseMixin = {
  getInitialState() {
    return { x: 0, y: 0 }
  },
  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }
}
const App = React.createClass({
  // 使用 mixin！
  mixins: [ MouseMixin ],
  
  render() {
    const { x, y } = this.state
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        <h1>The mouse position is ({x}, {y})</h1>
      </div>
    )
  }
})
ReactDOM.render(<App/>, document.getElementById('app'))