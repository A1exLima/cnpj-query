import { ContainerLayoutDefault } from './style'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

export function LayoutDefault() {
  return (
    <ContainerLayoutDefault>
      <Header />
      <Outlet />
      <Footer />
    </ContainerLayoutDefault>
  )
}
