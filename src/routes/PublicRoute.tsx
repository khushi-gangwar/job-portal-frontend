import React, { JSX } from 'react'
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }: { children: JSX.Element }) :JSX.Element => {
   const token = localStorage.getItem("token");
  if (token) {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const exp = payload.exp * 1000;
      if (Date.now() < exp) {
        // token valid → redirect to home
        return <Navigate to="/home" />;
      } else {
        // token expired → remove token and allow login
        localStorage.removeItem("token");
        return children;
      }
    } catch (err) {
      localStorage.removeItem("token");
      return children;
    }
  }

  return children; 
}

export default PublicRoute