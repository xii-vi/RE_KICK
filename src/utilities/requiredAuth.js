import {useLocation,Navigate,Outlet} from "react-router-dom";
import { useAuth } from "../context/authContext";

export const RequiresAuth = () => {
  const { authState:{userLogin} } = useAuth();
  const location = useLocation();
  return userLogin ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace/>;
};
