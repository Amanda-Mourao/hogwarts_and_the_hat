import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/forbidden" replace />;
  }
  return children;
};
