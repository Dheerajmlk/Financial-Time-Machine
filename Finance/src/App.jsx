import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import WhatIfScenarios from './pages/WhatIfScenarios'
import SpendingPatterns from './pages/ SpendingPatterns'
import Advisor from './pages/Advisor'
import ImpactReview from './pages/ImpactReview'
import ThemeToggle from './components/ThemeToggle'
import AddTransaction from './components/AddTransactions'
import ExportCSV from './components/ExportCSV'


function App() {
  return (
    <BrowserRouter>
      <ThemeToggle />
      <AddTransaction />
      <ExportCSV />
      <nav style={{ display: 'flex', gap: '12px', padding: '10px' }}>
        <Link to="/">Dashboard</Link>
        <Link to="/what-if">What-If</Link>
        <Link to="/patterns">Spending</Link>
        <Link to="/advisor">Advisor</Link>
        <Link to="/impact">Review</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/what-if" element={<WhatIfScenarios />} />
        <Route path="/patterns" element={<SpendingPatterns />} />
        <Route path="/advisor" element={<Advisor />} />
        <Route path="/impact" element={<ImpactReview />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
