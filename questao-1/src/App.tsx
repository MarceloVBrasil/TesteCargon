import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import HomePage from './pages/home/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={<Navigate to='/' />} path='*' />
      </Routes>
    </BrowserRouter>
  )
}

export default App
