import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CarroPage } from "./pages/CarroPage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/carros" element={<CarroPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
