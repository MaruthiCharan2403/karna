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
import UserHome from './components/UserHome'
import Examform from './components/Examform'
import ExamPage from './components/ExamPage'
import ResultsPage from './components/Resultspage'
import Doubtsolve from './components/Doubtsolve'
import Loader from './components/Loader'
import Studyplan from './components/Studyplan'
import { useState } from 'react'

function App() {
  const [log, setLog] = useState(false);
  return (
    <div>
      <Router>
        <Navbar log={log} setLog={setLog}/>
        <Routes>
          <Route path="/login" element={<Login setLog={setLog} />} />
          <Route path='/about' element={<About/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/userhome" element={<UserHome />} />
          <Route path="/examform" element={<Examform />} />
          <Route path="/exam/:examId" element={<ExamPage />} />
          <Route path="/results/:examId" element={<ResultsPage />} />
          <Route path="/doubtsolve" element={<Doubtsolve />} />
          <Route path="/studyplan" element={<Studyplan />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path="/" element={<BlurFadeTextDemo />} />
          <Route path="*" element={<Page404/>} />
          <Route path="/loader" element={<Loader />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
