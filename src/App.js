import React from 'react'

// Global CSS and Head Situation
import Helmet from 'react-helmet'
import Css from './styles'

// Routing Logic
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Views/Pages
import Home from './views/Home'
import About from './views/About'

// Needed Components
import Container from './components/Container'
import Navigation from './components/Navigation'
import NavLink from './components/NavLink'

const routes = [
  {
    title: 'Bot',
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
        <Navigation>
          {routes.map((route, i) => (
            <NavLink key={i} {...route} />
          ))}
        </Navigation>
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
