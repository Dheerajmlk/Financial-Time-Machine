import React from 'react'
import useFinanceStore from '../services/financeStore'

export default function ExportCSV() {
  const { transactions } = useFinanceStore()

  const handleExport = () => {
    const csvRows = [['Date', 'Type', 'Amount']]
    transactions.forEach(tx => {
      csvRows.push([tx.date, tx.type, tx.amount])
    })

    const blob = new Blob([csvRows.map(e => e.join(',')).join('\n')], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'transactions.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <button onClick={handleExport} style={{ margin: '12px', padding: '8px 16px' }}>
      Export CSV
    </button>
  )
}
