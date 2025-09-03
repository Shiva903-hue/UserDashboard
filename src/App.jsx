import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Firms from './Component/Firms'
import Account from './Component/Account'
import Dashboard from './Component/Dashboard'
import DailyTransiction from './Component/DailyTransiction'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Dashboard/>
      <Routes>
        <Route path='/' element={<DailyTransiction/>} />
        <Route path='/Firms' element={<Firms/>} />
        <Route path='/Account' element={<Account/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
