import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import BlurFadeTextDemo from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import Page404 from './components/Page404'
import Contact from './components/Contact'
import Services from './components/Services'
function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/about' element={<About/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path="/" element={<BlurFadeTextDemo />} />
          <Route path="*" element={<Page404/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
