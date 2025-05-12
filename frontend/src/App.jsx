import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import './stylesheets/App.css';
import Index from './components/Index';



function App() {

  return (
    <Router>
      <Routes>
        <Route path='/dashboard' element={<Index />} >
        </Route>
        <Route path='/' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App

