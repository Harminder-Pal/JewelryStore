const SignupRequest = (user) => {
    return {
        type: 'signuprequest',
        payload: user
    }
}

const Signupsuccess = (success) => {
    return {
        type: 'signupsuccess',
        payload: success
    }
}

const Signupfail = (error) => {
    return {
        type: 'signupfail',
        payload: error
    }
}

export const useraction={
    SignupRequest,Signupfail,Signupsuccess
}

// Login 

// const LoginRequest=()=>{
// return{
//     type:''
// }
// }
// const LoginSuccess=()=>{

// }
// const LoginFail=()=>{

// }