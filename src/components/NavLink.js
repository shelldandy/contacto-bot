import React from 'react'
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components'

const NavLink = styled.div`
  a {
    transition: color 0.25;
    color: ${props => props.active ? '#1e96c8' : 'rgba(74,74,74,.74)'};
    text-decoration: none;
    border-bottom: 2px solid;
    border-bottom-color: ${props => props.active ? 'inherit' : 'transparent'};
    display: block;
    padding: 0.4em 1em;
    &:hover, &:active, &:focus {
      color: ${props => props.active ? '#1e96c8' : 'rgba(74,74,74,.94)'};
    }
  }
`

export default ({ path, exact, ...props }) => (
  <Route path={path} exact={exact} children={({match}) => (
    <NavLink active={match}>
      <Link to={path}>{props.title}</Link>
    </NavLink>
  )} />
)
