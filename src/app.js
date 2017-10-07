import React from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill'


class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}

const app = document.getElementById("app");
ReactDOM.render(<Main />, app);