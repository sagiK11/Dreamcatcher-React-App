
const initState = {

}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS": console.log("login succes");
            return {
                ...state,
                authError: null,
            }
        case "LOGIN_ERROR": console.log("login failed");
            return {
                ...state,
                authError: "Login failed"
            }

        case "SIGNOUT_SUCCESS": console.log("signout success")
            return state
        case "SIGNUP_SUCCES": console.log("sign up succes")
            return {
                ...state,
                authError: null,
            }
        case "SIGNUP_ERROR": console.log("sign up error");
            return {
                ...state,
                authError: action.err.message,
            }

        default: return state;
    }
}

export default authReducer;