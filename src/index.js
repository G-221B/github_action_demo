import React, { Component } from 'react';
import ReactDOM from 'react-dom'

// 头部
class App extends Component {

  render() {
    return <div>
      <span>This is hickey title.</span>
      <p>new ADD</p>
    </div>
  }
}
// 底部注释

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)