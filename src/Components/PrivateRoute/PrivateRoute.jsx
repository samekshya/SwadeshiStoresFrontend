import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const isAuthenticated = !!localStorage.getItem("userToken"); // ✅ Converts to boolean

  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;
