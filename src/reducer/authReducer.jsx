const authReducer=(state, dispatch)=>{
    switch(dispatch.type){
        case "USER_LOGIN":
            return {...state, userLogin:true}
        case "USER_LOGOUT":
            return {...state, userLogin:false, encodedToken:"", userData:""}
        case "USER_DATA":
            return {...state, userData:dispatch.payload}
        case "USER_TOKEN":
            return {...state, encodedToken:dispatch.payload}
        default:
            state;
    }
}

const loginReducer=(state, dispatch)=>{
 switch(dispatch.type){
    case "SET_USERNAME":  
            return {...state, username:dispatch.payload}
    case "SET_EMAIL":
            return {...state, email:dispatch.payload}
    case "SET_PASSWORD":
            return {...state, password:dispatch.payload}
        default:
            state;
 }
}

const signupReducer=(state, dispatch)=>{
    switch(dispatch.type){
        case "SET_USERNAME":  
            return {...state, username:dispatch.payload}
        case "SET_EMAIL":   
            return {...state, email:dispatch.payload}
        case "SET_PASSWORD":
            return {...state, password:dispatch.payload}
        case "SET_CONFIRM_PASSWORD":
            return {...state, ConfirmPassword:dispatch.payload}
        default:
            state;
    }
}
export {authReducer, loginReducer, signupReducer} 