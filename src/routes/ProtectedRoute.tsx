import React, { JSX } from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}: {children: JSX.Element}): JSX.Element => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute