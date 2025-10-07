import Home from "@/pages/home/home";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import Jobs from "@/pages/jobs/Jobs";
import { Route, Routes } from "react-router-dom";
import Register from "@/features/auth/Register";
import Login from "@/features/auth/Login";
import Companies from "@/pages/companies/companies";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Register/>} />
      <Route path="/login"  element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/register" element={<Register/>} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/jobs"
        element={
          <ProtectedRoute>
            <Jobs />
          </ProtectedRoute>
        }
      />
         <Route
        path="/companies"
        element={
          <ProtectedRoute>
<Companies/>         
 </ProtectedRoute>
        }
      />
      
    </Routes>
  );
};

export default AppRouter;