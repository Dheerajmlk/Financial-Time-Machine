import React, { useState } from 'react'

export default function Advisor() {
  const [goal, setGoal] = useState('')
  const [advice, setAdvice] = useState('')

  const handleAdvice = () => {
    const g = goal.toLowerCase()
    if (g.includes('retire'))
      setAdvice('💡 Save at least 20% of your income in mutual funds or index funds to retire early.')
    else if (g.includes('home') || g.includes('house'))
      setAdvice('💡 Start a 20% down payment plan and build credit to qualify for better mortgage rates.')
    else if (g.includes('car'))
      setAdvice('💡 Save aggressively, compare EMI vs upfront, and avoid high-interest loans.')
    else
      setAdvice('Please enter a specific financial goal (e.g., retire, buy a house, car).')
  }

  return (
    <div style={{ padding: '24px' }}>
      <h1>🧠 Financial Advisor</h1>
      <input
        type="text"
        placeholder="Enter your goal (e.g., retire, buy home)"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        style={{ padding: '10px', width: '300px', marginRight: '12px' }}
      />
      <button onClick={handleAdvice} style={{ padding: '10px 16px', background: '#4f46e5', color: '#fff', border: 'none' }}>
        Get Advice
      </button>
      {advice && <p style={{ marginTop: '20px', fontSize: '18px' }}>{advice}</p>}
    </div>
  )
}
