import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class App extends Component {

  render() {
    return <div>This is title</div>
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)