import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Services from './pages/servicesPage/services'
import Home from './pages/homePage/home'
import Footer from './components/footer'
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/contact" element={<App />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
