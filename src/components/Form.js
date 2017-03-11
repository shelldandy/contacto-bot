import React from 'react'
import styled from 'styled-components'
import Input from './Input'
import TextArea from './TextArea'
import Submit from './Submit'

const StyledForm = styled.form`
  margin-top: 1em;
  margin-bottom: 1em;
  display: block;
  width: 100%;
`

const Form = props => {
  let { action } = props
  return (
    <StyledForm action={action}>
      <Input name='name' type='text' placeholder='Name' />
      <TextArea name='message' placeholder='Type something...' />
      <Submit type='submit'>Send</Submit>
    </StyledForm>
  )
}

export default Form
