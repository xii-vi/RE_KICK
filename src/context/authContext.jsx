import { useContext, createContext, useReducer} from "react";
import { authReducer } from "../reducer/authReducer";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const userInfo = JSON.parse(localStorage.getItem('userData')) || ""
    const tokenDetails = localStorage.getItem("encodedToken") || ""
    const [authState, authDispatch] = useReducer(authReducer, {
        userLogin:!!tokenDetails,
        encodedToken:tokenDetails,
        userDetails:userInfo,
        userData:userInfo,
    });
return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
    {children}
    </AuthContext.Provider>
);
};
const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };