import React, { useEffect } from 'react'
import useFinanceStore from '../services/financeStore'

export default function Dashboard() {
  const {
    income, expenses, assets, liabilities, fetchFinanceData
  } = useFinanceStore()

  useEffect(() => {
    fetchFinanceData()
  }, [])

  return (
    <div style={styles.container}>
      <h1>📊 Financial Dashboard</h1>
      <div style={styles.cardRow}>
        <Card label="Income" value={income} />
        <Card label="Expenses" value={expenses} />
        <Card label="Assets" value={assets} />
        <Card label="Liabilities" value={liabilities} />
      </div>
    </div>
  )
}

function Card({ label, value }) {
  return (
    <div style={styles.card}>
      <h3>{label}</h3>
      <p>₹ {value}</p>
    </div>
  )
}

const styles = {
  container: { padding: '24px' },
  cardRow: { display: 'flex', gap: '20px', flexWrap: 'wrap' },
  card: {
    flex: '1',
    padding: '16px',
    background: '#f1f3f5',
    borderRadius: '8px',
    minWidth: '180px'
  }
}
