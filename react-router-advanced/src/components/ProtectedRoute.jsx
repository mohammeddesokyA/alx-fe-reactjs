import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // ✅ استيراد من الملف الجديد

const ProtectedRoute = ({ children }) => {
  const isAuth = useAuth();

  if (!isAuth) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
