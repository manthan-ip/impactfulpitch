import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Services from './pages/servicesPage/Services'
import Home from './pages/homePage/Home'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import SuccessStories from './pages/successStoriesPage/SuccessStories'
import About from './pages/aboutPage/About'
import ContactUs from './components/ContactUs'
import { ContactProvider } from './context/ContactContext'
import SplashCursor from './components/SplashCursor'

export default function App() {
  return (
    <ContactProvider>
      <SplashCursor/>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<ContactUs />} /> */}
        </Routes>
        <Footer />
        <ContactUs />
      </BrowserRouter>
    </ContactProvider>
  )
}
