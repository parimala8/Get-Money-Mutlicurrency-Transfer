import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login'; // Import the Login component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
