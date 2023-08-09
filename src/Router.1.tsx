import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { History } from './pages/history'
import { DefaultLayout } from './Layouts/DefaulLayout'

export function Router() {
  return (
    <Routes>
      <Router path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/histórico" element={<History />} />
      </Router>
    </Routes>
  )
}
