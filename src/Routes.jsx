import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './containers/Home/Home'
import Services from './containers/ServiceSection/Services'
import About from './containers/About/About'
import Contact from './containers/Contact/Contact'
import NotFound from './containers/NotFound/NotFound'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/services' component={Services} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default Routes
