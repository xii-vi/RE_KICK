import { useAuth } from "../../context/authContext";
import { useDocumentTitle } from "../../utilities/documentTitle";
export const UserProfile = () => {
    useDocumentTitle("Profile")
    const { authState:{userData:{firstName,lastName,email}}} = useAuth();

    return (
        <div>
            <h4>Profile Details</h4>
            <p>Name : {firstName} {lastName}</p>
            <p>Email : {email}</p>
        </div>
    )
}