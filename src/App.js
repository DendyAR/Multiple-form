import './App.css';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import Dashoboard from './components/Dashboard/Dashoboard';
import Register from './pages/Register.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashoboard />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
