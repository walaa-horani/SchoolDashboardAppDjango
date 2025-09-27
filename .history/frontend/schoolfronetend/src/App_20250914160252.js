import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>}/> 
       <Route path="/register" element={<Register/>}/> 
       {/* <Route path="/login" element={<Login/>}/>  */}



      </Routes>
    

    
    </div>
  );
}

export default App;
