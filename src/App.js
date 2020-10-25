import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// 引用组件
import Home from './views/Home'
import About from './views/About'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={Home} exact path="/"></Route>
          <Route component={About} path="/about"></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App;
