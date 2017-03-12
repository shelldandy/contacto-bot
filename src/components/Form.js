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
  let {
    onSubmit,
    nameValue,
    messageValue,
    inputHandler
  } = props
  return (
    <StyledForm onSubmit={onSubmit}>
      <Input
        name='name'
        type='text'
        placeholder='Name'
        value={nameValue}
        onChange={inputHandler}
      />
      <TextArea
        name='message'
        placeholder='Type something...'
        value={messageValue}
        onChange={inputHandler}
      />
      <Submit type='submit'>Send</Submit>
    </StyledForm>
  )
}

export default Form
