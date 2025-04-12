import React, { useEffect, useState } from 'react'
import { Bar, Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale } from 'chart.js'
import useFinanceStore from '../services/financeStore'

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale)

export default function SpendingPatterns() {
    const { transactions, fetchFinanceData } = useFinanceStore()
    const [chartData, setChartData] = useState(null)

    console.log('Finance store loaded')

    useEffect(() => {
        fetchFinanceData()
    }, [])

    useEffect(() => {
        if (transactions.length > 0) {
            const grouped = transactions.reduce((acc, tx) => {
                acc[tx.type] = (acc[tx.type] || 0) + parseFloat(tx.amount)
                return acc
            }, {})
            const labels = Object.keys(grouped)
            const values = Object.values(grouped)
            console.log('transactions:', transactions)
            console.log('grouped:', grouped)
            console.log('labels:', labels)
            console.log('values:', values)

            setChartData({
                labels,
                datasets: [
                    {
                        label: 'Spending by Category',
                        data: values,
                        backgroundColor: ['#60a5fa', '#34d399', '#f87171', '#fbbf24', '#c084fc']
                    }
                ]
            })
        }
    }, [transactions])

    return (
        <div style={{ padding: '24px' }}>
            <h1>📈 Spending Patterns</h1>
            {chartData ? (
                <>
                    <div style={{ maxWidth: '600px' }}>
                        <Bar data={chartData} />
                    </div>
                    <div style={{ maxWidth: '400px', marginTop: '40px' }}>
                        <Pie data={chartData} />
                    </div>
                </>
            ) : (
                <p>Loading chart...</p>
            )}
        </div>
    )
}
