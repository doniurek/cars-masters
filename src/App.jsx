import  { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Offer from "./components/Offer"
import Opinions from "./components/Opinions"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Offer />
      <Opinions />
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
