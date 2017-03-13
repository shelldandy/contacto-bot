import React from 'react'
import H1 from '../components/H1'
import P from '../components/P'
import Avatar from '../components/Avatar/index'
import Mike from './mike.jpg'
import Telegram from '../components/Telegram'
import FormContainer from '../containers/FormContainer'
import Container from '../components/Container'

const Home = props => {
  return (
    <Container center>
      <Avatar image={Mike} />
      <H1>Thanks for visiting</H1>
      <P>Send me a message on</P>
      <Telegram />
      <FormContainer />
    </Container>
  )
}

export default Home
