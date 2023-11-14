import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import AddMusic from './assets/Components/AddMusic/AddMusic.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/AddMusic" element={<AddMusic />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App