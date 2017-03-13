import React from 'react'
import H1 from '../components/H1'
import Container from '../components/Container'
import P from '../components/P'
import A from '../components/A'

const About = props => {
  return (
    <Container>
      <H1>About this Project</H1>
      <P>After reading <A href='https://medium.com/superhighfives/an-almost-static-stack-6df0a2791319'>this article</A> I decided to give it a go myself to try the tech out.</P>
      <P>Around 2 years ago I also made a small Telegram Bot to send
      me messages however it was only a textarea and I usually didn't know
      who wrote me so I decided now was the perfect time to try everything
      out while making a cool new contact page</P><P>So here it is
      hopefully you'll like it since it was super fun to build.
      </P>
    </Container>
  )
}

export default About
