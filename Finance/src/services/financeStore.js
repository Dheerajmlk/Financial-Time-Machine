import { create } from 'zustand'
import { getData, postData } from '../services/api'

const useFinanceStore = create((set, get) => ({
  income: 0,
  expenses: 0,
  assets: 0,
  liabilities: 0,
  transactions: [],

  fetchFinanceData: async () => {
    const summary = await getData('summary')
    const transactions = await getData('transactions')
    set({
      income: summary.income || 0,
      expenses: summary.expenses || 0,
      assets: summary.assets || 0,
      liabilities: summary.liabilities || 0,
      transactions: transactions ? Object.values(transactions) : []
    })
  },

  addTransaction: async (tx) => {
    await postData('transactions', tx)
    get().fetchFinanceData()
  },

  updateSummary: async (summary) => {
    await postData('summary', summary)
    get().fetchFinanceData()
  }
}))

export default useFinanceStore
