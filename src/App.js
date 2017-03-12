import React from 'react'
import Home from './views/Home'
import Helmet from 'react-helmet'
import Css from './styles'

const App = (props) => {
  return (
    <div className='App'>
      <Helmet
        style={[
          {type: 'text/css', cssText: Css}
        ]}
      />
      <Home />
    </div>
  )
}

export default App
