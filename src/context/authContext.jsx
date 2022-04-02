import { useContext, createContext, useReducer} from "react";
import { authReducer } from "../reducer/authReducer";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(authReducer, {
        userLogin:false,
        encodedToken:"",
        userDetails:"",
        userData:"",
    });
return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
    {children}
    </AuthContext.Provider>
);
};
const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };