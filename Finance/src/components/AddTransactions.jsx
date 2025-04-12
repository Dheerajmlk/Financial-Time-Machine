import React, { useState } from 'react'
import { postData } from '../services/api'
import useFinanceStore from '../services/financeStore'

export default function AddTransaction() {
  const [tx, setTx] = useState({ type: '', amount: '', date: '' })
  const { fetchFinanceData } = useFinanceStore()

  const handleChange = (e) => {
    const { name, value } = e.target
    setTx(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!tx.type || !tx.amount || !tx.date) return alert('Fill all fields')
    await postData('transactions', { ...tx, amount: parseFloat(tx.amount) })
    fetchFinanceData()
    setTx({ type: '', amount: '', date: '' })
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: '24px', maxWidth: '400px' }}>
      <h2>Add Transaction</h2>
      <input type="text" name="type" value={tx.type} placeholder="Type (e.g., Rent)" onChange={handleChange} /><br />
      <input type="number" name="amount" value={tx.amount} placeholder="Amount" onChange={handleChange} /><br />
      <input type="date" name="date" value={tx.date} onChange={handleChange} /><br />
      <button type="submit">Submit</button>
    </form>
  )
}
