import React from 'react'

// Global CSS and Head Situation
import Helmet from 'react-helmet'
import Css from './styles'

// Routing Logic
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Views/Pages
import Home from './views/Home'
import About from './views/About'

import Container from './components/Container'

const routes = [
  {
    title: 'Home',
    path: '/',
    component: Home,
    exact: true
  }, {
    title: 'About',
    path: '/about',
    component: About
  }
]

const App = (props) => {
  return (
    <Router>
      <Container center>
        <Helmet
          style={[
            {type: 'text/css', cssText: Css}
          ]}
          titleTemplate={`%s | Contacto Bot`}
        />
        <Switch>
          { routes.map((route, i) => (
            <Route key={i} {...route} />
          )) }
        </Switch>
      </Container>
    </Router>
  )
}

export default App
