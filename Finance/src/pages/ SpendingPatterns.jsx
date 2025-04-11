import React from 'react'
import { Bar, Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale)

const spendingData = {
  labels: ['Rent', 'Groceries', 'Travel', 'Health', 'Entertainment'],
  datasets: [{
    label: 'Monthly Spending',
    data: [12000, 8000, 3000, 2500, 4000],
    backgroundColor: ['#f87171', '#60a5fa', '#34d399', '#fbbf24', '#c084fc']
  }]
}

export default function SpendingPatterns() {
  return (
    <div style={{ padding: '24px' }}>
      <h1>📈 Spending Patterns</h1>
      <div style={{ maxWidth: '600px', marginTop: '24px' }}>
        <Bar data={spendingData} />
        <h3 style={{ marginTop: '40px' }}>Breakdown</h3>
        <Pie data={spendingData} />
      </div>
    </div>
  )
}
