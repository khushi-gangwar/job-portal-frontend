import Register from "@/features/auth/Register";
import {BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Login from "./features/auth/Login";
import Home from "./pages/home/home";
import About from "./features/about/About";


function App() {
  return (
    <Router>
      <Routes></Routes>
      <Routes>
          <Route path="/" element={<Register />} /> 
<Route path="/home" element={<Home />} />
<Route path="/about" element={<About/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
  );
}

export default App;
