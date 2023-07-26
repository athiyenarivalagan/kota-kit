import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  let auth = useAuth()
  let location = useLocation()
  
  if (!auth.user) {
    // user is not authenticated
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return children;
};

export default ProtectedRoute