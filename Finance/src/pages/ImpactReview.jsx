import React from 'react'

const pastDecisions = [
  { event: 'Bought a Bike', impact: '+15k savings/month', date: '2021-06' },
  { event: 'Quit Job for MBA', impact: '-18 months income, +long-term ROI', date: '2022-01' }
]

export default function ImpactReview() {
  return (
    <div style={{ padding: '24px' }}>
      <h1>⏪ Past Decision Review</h1>
      <p>Explore the financial impact of major life choices:</p>
      <ul>
        {pastDecisions.map((d, i) => (
          <li key={i} style={styles.item}>
            <strong>{d.event}</strong> on <em>{d.date}</em> ➤ {d.impact}
          </li>
        ))}
      </ul>
    </div>
  )
}

const styles = {
  item: { marginBottom: '12px', fontSize: '16px' }
}
