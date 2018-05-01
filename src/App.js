import React from 'react'

// Global CSS and Head Situation
import Helmet from 'react-helmet'
import Css from './styles'

// Routing Logic
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Views/Pages
import Home from './views/Home'
import About from './views/About'
import FourOhFour from './views/404'

// Needed Components
import Navigation from './components/Navigation'
import NavLink from './components/NavLink'
import Footer from './components/Footer'
import A from './components/A'
import Container from './components/Container'

const routes = [
  {
    title: '🤖',
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
      <main>
        <Helmet
          style={[
            {type: 'text/css', cssText: Css}
          ]}
          titleTemplate={`%s | Contacto Bot`}
        />
        <Container>
          <Navigation>
            {routes.map((route, i) => (
              <NavLink key={i} {...route} />
            ))}
          </Navigation>
        </Container>
        <Switch>
          { routes.map((route, i) => (
            <Route key={i} {...route} />
          )) }
          <Route component={FourOhFour} />
        </Switch>
        <Container center>
          <Footer>Design + Code <A href='https://twitter.com/shelldandy'>@shelldandy</A></Footer>
        </Container>
      </main>
    </Router>
  )
}

export default App
