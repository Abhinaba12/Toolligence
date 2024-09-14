import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';
import { Toaster } from 'react-hot-toast'
import Summary from './pages/Summary';
import Tools from './pages/Tools';
import Paragraph from './pages/Paragraph';
import Chatbot from './pages/Chatbot';
import JS from './pages/JS';
import ReactGA from "react-ga4"

const ga4_id = process.env.REACT_APP_GA4
console.log(ga4_id)

ReactGA.initialize(ga4_id)

ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname
})

function App() {
  return (
    <>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/tools' element={<Tools />} />
        <Route path='/summary' element={<Summary />} />
        <Route path='/paragraph' element={<Paragraph />} />
        <Route path='/chatbot' element={<Chatbot />} />
        <Route path='/js' element={<JS />} />
      </Routes>
    </>
  );
}

export default App;
