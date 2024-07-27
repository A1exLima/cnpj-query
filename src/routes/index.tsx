import { Routes, Route } from 'react-router-dom'

import { LayoutDefault } from '../layout'

import { Home } from '../pages/home'
import { QueryData } from '../pages/queryData'
import { History } from '../pages/history'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<Home />} />
        <Route path="/query-data" element={<QueryData />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
