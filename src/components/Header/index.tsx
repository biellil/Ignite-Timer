import { HeaderComponent } from './styles'
import { Scroll, Timer } from '@phosphor-icons/react'

import logo from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderComponent>
      <img src={logo} alt="logo" />
      <nav>
        <NavLink to="/" title="timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/History" title="históricos">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderComponent>
  )
}
