import { Routes, Route } from 'react-router-dom'
import { LayoutDefault } from '../layout'
import { Home } from '../pages/home'
import { QueryCnpj } from '../pages/queryCnpj'
import { History } from '../pages/history'

interface RouterProps {
  toggleTheme: () => void
}

export function Router({ toggleTheme }: RouterProps) {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault toggleTheme={toggleTheme} />}>
        <Route index element={<Home />} />
        <Route path="query-cnpj/:id" element={<QueryCnpj />} />
        <Route path="history" element={<History />} />
      </Route>
    </Routes>
  )
}
