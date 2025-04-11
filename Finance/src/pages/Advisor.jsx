import React, { useState } from 'react'

export default function Advisor() {
  const [goal, setGoal] = useState('')
  const [advice, setAdvice] = useState('')

  const handleAdvice = () => {
    // Mock logic
    if (goal.toLowerCase().includes('retire'))
      setAdvice('Invest 20% of your income in index funds. Target retirement corpus: ₹1.5 Cr.')
    else if (goal.toLowerCase().includes('home'))
      setAdvice('Save for 20% down payment. Explore home loan options with interest < 9%.')
    else setAdvice('Please enter a specific financial goal like "buy a car", "retire", etc.')
  }

  return (
    <div style={styles.container}>
      <h1>🧠 AI Financial Advisor</h1>
      <input
        type="text"
        placeholder="Enter your financial goal"
        value={goal}
        onChange={e => setGoal(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleAdvice} style={styles.btn}>Get Advice</button>
      {advice && <p style={styles.result}>💡 {advice}</p>}
    </div>
  )
}

const styles = {
  container: { padding: '24px' },
  input: { padding: '10px', marginRight: '12px', width: '300px' },
  btn: { padding: '10px 16px', background: '#4f46e5', color: '#fff', border: 'none' },
  result: { marginTop: '20px', fontSize: '18px' }
}
