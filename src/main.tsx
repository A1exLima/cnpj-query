import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

import { GlobalStyle } from './styles/GlobalStyles'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defaultTheme'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'
import { lightTheme } from './styles/themes/blackTheme'

const Application = () => {
  const [theme, setTheme] = useState(defaultTheme)

  const toggleTheme = () => {
    setTheme(theme === defaultTheme ? lightTheme : defaultTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Router toggleTheme={toggleTheme} />
      </BrowserRouter>
    </ThemeProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
)
