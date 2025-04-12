import React, { createContext, useState, useContext } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false)
  const toggleTheme = () => setDark(!dark)

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      <div
        style={{
          background: dark ? '#111' : '#fff',
          color: dark ? '#eee' : '#000',
          minHeight: '100vh'
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
