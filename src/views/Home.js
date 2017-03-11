import React from 'react'
import Container from '../components/Container'
import H1 from '../components/H1'
import P from '../components/P'
import Avatar from '../components/Avatar/index'
import Mike from './mike.jpg'
import Telegram from '../components/Telegram'
import Form from '../components/Form'
import Footer from '../components/Footer'
import A from '../components/A'

const Home = props => {
  return (
    <Container center>
      <Avatar image={Mike} />
      <H1>Thanks for visiting</H1>
      <P>Send me a message on</P>
      <Telegram />
      <Form />
      <Footer>Design + Code <A href='https://twitter.com/mpalau'>@mpalau</A></Footer>
    </Container>
  )
}

export default Home
