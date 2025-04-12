import React from 'react'
import { useTheme } from '../services/ThemeContext'

export default function ThemeToggle() {
  const { dark, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      style={{
        margin: '12px',
        padding: '8px 16px',
        background: dark ? '#444' : '#ccc',
        border: 'none',
        borderRadius: '6px'
      }}
    >
      Toggle {dark ? 'Light' : 'Dark'} Mode
    </button>
  )
}

