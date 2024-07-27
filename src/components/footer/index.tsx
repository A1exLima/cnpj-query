import { Link } from 'react-router-dom'
import { Content, FooterContainer } from './style'
import { FaCode } from 'react-icons/fa6'
export function Footer() {
  return (
    <FooterContainer>
      <Content>
        <p>Copyright © 2024 - Consulta CNPJ. Todos os direitos reservados.</p>
        <Link to="https://alexcode.com.br/" target="_blank">
          <p>Created by</p>
          <FaCode />
        </Link>
      </Content>
    </FooterContainer>
  )
}
