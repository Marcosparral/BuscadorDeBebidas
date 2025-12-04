import { BrowserRouter, Routes, Route } from "react-router-dom"
import IndexPage from "./pages/IndexPage"
import FavoritePage from "./pages/FavoritePage"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />}/>
        <Route path="/favoritos" element={<FavoritePage />}/>
      </Routes>
    </BrowserRouter>
  )
}
