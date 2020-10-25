import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// 引用组件
import Home from './views/Home'
import About from './views/About'
// 引用样式文件
import './styles/main.scss'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className='test'>
        <h1>absffd</h1>
        <BrowserRouter>
          <Switch>
            <Route component={Home} exact path="/"></Route>
            <Route component={About} path="/about"></Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
export default App;
