import React from 'react'

const decisions = [
  {
    event: 'Bought a used bike instead of new',
    impact: '+ ₹15K saved',
    date: '2023-06'
  },
  {
    event: 'Invested in SIP monthly',
    impact: '+ ₹1.2L portfolio growth',
    date: '2024-01'
  },
  {
    event: 'Took personal loan for wedding',
    impact: '- ₹2L cash flow hit',
    date: '2024-09'
  }
]

export default function ImpactReview() {
  return (
    <div style={{ padding: '24px' }}>
      <h1>⏪ Past Decision Review</h1>
      <p>How key decisions shaped your financial timeline:</p>
      <ul style={{ marginTop: '20px' }}>
        {decisions.map((d, idx) => (
          <li key={idx} style={{ marginBottom: '16px' }}>
            <strong>{d.event}</strong> <br />
            📆 {d.date} — <em>{d.impact}</em>
          </li>
        ))}
      </ul>
    </div>
  )
}
