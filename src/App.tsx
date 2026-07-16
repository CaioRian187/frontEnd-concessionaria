import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CarroPage } from "./pages/CarroPage"
import { HomePage } from "./pages/HomePage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/carros" element={<CarroPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
