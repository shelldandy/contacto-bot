import styled from 'styled-components'

const Submit = styled.button`
  appearance: none;
  background-image: linear-gradient(-196deg, #37AEE2 6%, #1E96C8 93%);
  border-radius: 40px;
  font-size: 18px;
  color: #FFFFFF;
  margin: 0 auto;
  max-width: 150px;
  border: 0;
  padding: 10px 50px;
  text-align: center;
  font-family: inherit;
  margin-top: 10px;
  transition: box-shadow .2s;
  &:hover, &:focus {
    box-shadow: 0 2px 4px rgba(0,0,0,0.5);
  }
  &:active {
    box-shadow: none;
  }
`

export default Submit
