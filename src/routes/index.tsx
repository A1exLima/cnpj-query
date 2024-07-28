import { Routes, Route } from 'react-router-dom'

import { LayoutDefault } from '../layout'

import { Home } from '../pages/home'
import { QueryCnpj } from '../pages/queryCnpj'
import { History } from '../pages/history'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<Home />} />
        <Route path="/query-cnpj/:id" element={<QueryCnpj />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
