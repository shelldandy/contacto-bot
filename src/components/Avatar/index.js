import styled from 'styled-components'
import defaultAvatar from './default.svg'

const Avatar = styled.div`
  width: 150px;
  height: 150px;
  background-repeat: no-repeat;
  margin: 0 auto;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.image ? props.image : defaultAvatar});
  border-radius: 50%;
  ${props => props.image ? 'border: 1px solid rgba(74,74,74, 0.94);' : null}
`

export default Avatar
