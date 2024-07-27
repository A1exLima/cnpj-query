import {
  Brand,
  Content,
  HeaderContainer,
  MenuSideBar,
  Nav,
  SideBar,
} from './style'
import { NavLink } from 'react-router-dom'
import { ImOffice } from 'react-icons/im'
import { IoMenu, IoClose } from 'react-icons/io5'
import { useState } from 'react'

export function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const waitAndCloseMenu = () => {
    setMenuOpen(false)
  }

  return (
    <HeaderContainer>
      <Content>
        <Brand to="/" onClick={waitAndCloseMenu}>
          <ImOffice />
          <div>
            <h1>Consulta CNPJ</h1>
            <p>Situação cadastral de forma rápida e intuitiva</p>
          </div>
        </Brand>

        <Nav>
          <ul>
            <NavLink to="/" onClick={waitAndCloseMenu}>
              <li>Home</li>
            </NavLink>
            <NavLink to="/history" onClick={waitAndCloseMenu}>
              <li>Histórico</li>
            </NavLink>
          </ul>
        </Nav>

        <SideBar>
          {!menuOpen ? (
            <IoMenu className="open-button" onClick={toggleMenu} />
          ) : (
            <IoClose className="close-button" onClick={toggleMenu} />
          )}

          <MenuSideBar className={`${menuOpen ? 'menu-open' : ''}`}>
            <ul>
              <NavLink to="/" onClick={waitAndCloseMenu}>
                <li>Home</li>
              </NavLink>
              <NavLink to="/history" onClick={waitAndCloseMenu}>
                <li>Histórico</li>
              </NavLink>
            </ul>
          </MenuSideBar>
        </SideBar>
      </Content>
    </HeaderContainer>
  )
}
