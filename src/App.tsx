import { BrowserRouter, Route, Routes } from "react-router-dom"
import Index from "./page"
import Programas from "./page/programas"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/programas/:id' element={<Programas />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
