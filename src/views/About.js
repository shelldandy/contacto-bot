import React from 'react'
import Container from '../components/Container'
import H1 from '../components/H1'
import P from '../components/P'
import Avatar from '../components/Avatar/index'
import Mike from './mike.jpg'
import Footer from '../components/Footer'
import A from '../components/A'

const About = props => {
  return (
    <Container center>
      <Avatar image={Mike} />
      <H1>About this Project</H1>
      <P>This is a project blah blah</P>
      <Footer>Design + Code <A href='https://twitter.com/mpalau'>@mpalau</A></Footer>
    </Container>
  )
}

export default About
