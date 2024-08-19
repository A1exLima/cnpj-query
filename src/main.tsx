import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'
import { ChangeTheme, useTheme } from './hooks/changeTheme'

const App = () => {
  const { theme } = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChangeTheme>
      <App />
    </ChangeTheme>
  </React.StrictMode>,
)
