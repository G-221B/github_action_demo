import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class App extends Component {

  render() {
    return <div>
      <span>This is hickey title.</span>
      <p>new ADD</p>
    </div>
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)