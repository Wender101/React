import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Contato from './Pages/Contato'
import Sobre from './Pages/Sobre'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}