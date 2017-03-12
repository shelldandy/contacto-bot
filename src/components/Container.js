import styled from 'styled-components'

const Container = styled.div`
  width: 95%;
  max-width: 600px;
  margin: 0 auto;
  ${props => props.center ? 'text-align: center;' : null}
`

export default Container
