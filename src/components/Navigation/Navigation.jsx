import React from 'react'
import { NavLi, NavUl } from './Navigation.styled'

export const Navigation = () => {
  return (
      <nav>
          <NavUl>
              <li>
                <NavLi to='/'>Home</NavLi>
              </li>
              <li>
                <NavLi to='/movies'>Movies</NavLi>
              </li>
          </NavUl>
    </nav>
  )
}
