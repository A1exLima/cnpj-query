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

// Componente de cabeçalho
export function Header() {
  // Estado para controlar se o menu está aberto ou fechado
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  // Função para alternar o estado do menu entre aberto e fechado
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  // Função para fechar o menu
  const waitAndCloseMenu = () => {
    setMenuOpen(false)
  }

  // Renderização do componente
  return (
    <HeaderContainer>
      <Content>
        {/* Marca da aplicação, fecha o menu ao ser clicada */}
        <Brand to="/" onClick={waitAndCloseMenu}>
          <ImOffice />
          <div>
            <h1>Consulta CNPJ</h1>
            <p>Situação cadastral de forma rápida e intuitiva</p>
          </div>
        </Brand>

        {/* Navegação principal */}
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

        {/* Barra lateral de navegação para dispositivos móveis */}
        <SideBar>
          {!menuOpen ? (
            // Ícone para abrir o menu
            <IoMenu className="open-button" onClick={toggleMenu} />
          ) : (
            // Ícone para fechar o menu
            <IoClose className="close-button" onClick={toggleMenu} />
          )}

          {/* Menu lateral que aparece quando o menu está aberto */}
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
