import { Navigate } from "react-router-dom";
import { useUser } from "../context/userContext";


export const PublicOnlyRoute = ({ children }) => {
  const { user, loading } = useUser();

  if (loading) return <div>Loading...</div>;

  return user ? <Navigate to="/user/dashboard" /> : children;
};
