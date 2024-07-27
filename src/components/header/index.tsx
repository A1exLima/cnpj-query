import { Brand, Content, HeaderContainer, Nav, SideBar } from './style'

import { NavLink } from 'react-router-dom'

import { ImOffice } from 'react-icons/im'
import { IoMenu } from 'react-icons/io5'
import { useState } from 'react'

export function Header() {
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false)

  const handleToggleSidebar = () => {
    setToggleSidebar((prevState) => !prevState)
  }

  return (
    <HeaderContainer>
      <Content>
        <Brand to="/">
          <ImOffice />
          <div>
            <h1>Consulta CNPJ</h1>
            <p>Situação cadastral de forma rápida e intuitiva</p>
          </div>
        </Brand>

        <Nav>
          <ul>
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
            <NavLink to="/history">
              <li>Histórico</li>
            </NavLink>
          </ul>
        </Nav>

        <SideBar $toggleSidebar={toggleSidebar}>
          <IoMenu onClick={handleToggleSidebar} />

          <div>
            <ul>
              <NavLink to="/">
                <li>Home</li>
              </NavLink>
              <NavLink to="/history">
                <li>Histórico</li>
              </NavLink>
            </ul>
          </div>
        </SideBar>
      </Content>
    </HeaderContainer>
  )
}
