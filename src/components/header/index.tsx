import { Link } from 'react-router-dom'
import { HeaderContainer } from './style'

export function Header() {
  return (
    <HeaderContainer>
      <p>Header</p>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/history">
            <li>Histórico</li>
          </Link>
          <Link to="/query-data">
            <li>Consulta</li>
          </Link>
        </ul>
      </nav>
    </HeaderContainer>
  )
}
