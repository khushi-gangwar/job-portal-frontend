import Register from "@/features/auth/Register";
import {BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Login from "./features/auth/Login";
import Home from "./pages/home/home";
import Jobs from "./pages/jobs/Jobs";
import AppRouter from "./routes/AppRouter";


function App() {
  return (
    <Router>
   <AppRouter/>
    </Router>
  );
}

export default App;
