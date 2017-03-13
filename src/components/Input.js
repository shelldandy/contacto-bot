import styled from 'styled-components'
import React from 'react'
import Label from './Label'

const black = 'rgba(74,74,74,0.94)'

const StyledInput = styled.input`
  appearance: none;
  background: #FFFFFF;
  width: 100%;
  display: block;
  font-family: inherit;
  font-size: 1em;
  color: ${black};
  border: 2px solid transparent;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  border-radius: 3px;
  padding: ${10 / 16}em;
  outline: none;
  margin-bottom: ${10 / 16}em;
  &:focus, &:active {
    border-color: #1e96c8;
    box-shadow: none;
  }
`

const Input = (props) => {
  let { name, type, placeholder, pattern, value, onChange } = props
  return (
    <div>
      <Label htmlFor={name} />
      <StyledInput
        type={type}
        placeholder={placeholder}
        id={name}
        pattern={pattern}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Input
