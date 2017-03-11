import React from 'react'
import Container from '../components/Container'
import H1 from '../components/H1'
import Avatar from '../components/Avatar/index'
import Mike from './mike.jpg'

const Home = props => {
  return (
    <Container center>
      <Avatar image={Mike} />
      <H1>Thanks for visiting</H1>
      <p>Send a message to my Telegram</p>
    </Container>
  )
}

export default Home
