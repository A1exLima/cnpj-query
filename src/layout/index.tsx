import { ContainerLayoutDefault } from './style'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

interface LayoutDefaultProps {
  toggleTheme: () => void
}

export function LayoutDefault({
  toggleTheme,
}: LayoutDefaultProps): JSX.Element {
  return (
    <ContainerLayoutDefault>
      <Header toggleTheme={toggleTheme} />
      <Outlet />
      <Footer />
    </ContainerLayoutDefault>
  )
}
