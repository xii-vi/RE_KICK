import { useAuth } from "../../context/authContext";
export const UserProfile = () => {

    const { authState:{userData:{firstName,lastName,email}}} = useAuth();

    return (
        <div>
            <h4>Profile Details</h4>
            <p>Name : {firstName} {lastName}</p>
            <p>Email : {email}</p>
        </div>
    )
}