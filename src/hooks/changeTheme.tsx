import { createContext, useState, ReactNode, useContext } from 'react'

import { lightTheme } from '../styles/themes/lightTheme'
import { defaultTheme } from '../styles/themes/defaultTheme'

export type ThemeType = typeof defaultTheme

interface ThemeContextProps {
  theme: ThemeType
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: defaultTheme,
  toggleTheme: () => {},
})

interface ChangeThemeProps {
  children: ReactNode
}

export const ChangeTheme = ({ children }: ChangeThemeProps) => {
  const [theme, setTheme] = useState<ThemeType>(defaultTheme)

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === defaultTheme ? lightTheme : defaultTheme,
    )
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
