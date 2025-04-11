import React, { useState } from 'react'

export default function WhatIfScenarios() {
  const [input, setInput] = useState({
    salary: 60000,
    investmentReturn: 8,
    monthlyExpense: 25000,
    years: 15
  })

  const projectedWealth = () => {
    const { salary, investmentReturn, monthlyExpense, years } = input
    const annualSaving = (salary - monthlyExpense) * 12
    let total = 0
    for (let i = 0; i < years; i++) {
      total += annualSaving
      total *= 1 + investmentReturn / 100
    }
    return Math.round(total)
  }

  const handleChange = e => {
    const { name, value } = e.target
    setInput(prev => ({ ...prev, [name]: parseFloat(value) }))
  }

  return (
    <div style={styles.container}>
      <h1>🤔 What-If Simulator</h1>
      <div style={styles.form}>
        {Object.entries(input).map(([label, val]) => (
          <div key={label}>
            <label>{label}:</label>
            <input
              type="number"
              name={label}
              value={val}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
      <h3>📈 Projected Wealth After {input.years} Years: ₹ {projectedWealth()}</h3>
    </div>
  )
}

const styles = {
  container: { padding: '24px' },
  form: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '16px',
    marginBottom: '20px'
  }
}
