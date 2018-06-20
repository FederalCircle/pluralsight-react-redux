import React from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Home from './containers/Home/Home'
import Courses from './containers/Courses/Courses'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/courses" component={ Courses } />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
