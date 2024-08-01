import {
  Brand,
  Content,
  HeaderContainer,
  MenuSideBar,
  Nav,
  SideBar,
} from './style'

import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { ImOffice, ImSun } from 'react-icons/im'
import { IoMenu, IoClose } from 'react-icons/io5'
import { FaMoon } from 'react-icons/fa'

interface HeaderProps {
  toggleTheme: () => void
}

// Componente de cabeçalho
export function Header({ toggleTheme }: HeaderProps) {
  // Estado para controlar se o menu está aberto ou fechado
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const [stateButton, setStateButton] = useState(false)

  // Função para alternar o estado do menu entre aberto e fechado
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  // Função para fechar o menu
  const waitAndCloseMenu = () => {
    setMenuOpen(false)
  }

  const switchMode = () => {
    setStateButton((prevState) => !prevState)
    toggleTheme()
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

        <Nav>
          <ul>
            <NavLink to="/" onClick={waitAndCloseMenu}>
              <li>Home</li>
            </NavLink>
            <NavLink to="/history" onClick={waitAndCloseMenu}>
              <li>Histórico</li>
            </NavLink>
          </ul>

          <div className="switch-mode">
            {stateButton ? (
              <FaMoon onClick={switchMode} title="Modo escuro" />
            ) : (
              <ImSun onClick={switchMode} title="Modo claro" />
            )}
          </div>
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
              <div className="switch-mode">
                {stateButton ? (
                  <FaMoon onClick={switchMode} title="Modo escuro" />
                ) : (
                  <ImSun onClick={switchMode} title="Modo claro" />
                )}
              </div>

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
