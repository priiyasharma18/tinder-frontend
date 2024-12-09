import { createSlice } from "@reduxjs/toolkit";

const STATUS = Object.freeze({
    success: "success",
    loading: "loading",
    error: "error"
})

const userSlice=createSlice({
name:"user",
initialState:{
        user: {},
        status: STATUS.success,
        isAuthenticated: false,
        resError: false
},
reducers:{
    setUser(state,action){
        state.user=action.payload
    },
    setStatus(state,action){
        state.status=action.payload
    },
    setAuthentication(state,action){
        state.isAuthenticated=action.payload
    },
    setError(state,action){
        state.resError=action.payload
    }
}
})

export const {setUser,setStatus,setAuthentication,setError}=userSlice.actions

export default userSlice.reducer

//thunk for asynchronous call 

 export function signupThunk(firstname,lastname,email,password){

    return async function thunkSignup(dispatch,getState){
        
        dispatch(setStatus(STATUS.loading))
        dispatch(setAuthentication(false))
        dispatch(setError(false))
        try{
            let register= await fetch('http://localhost:8081/signup', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    'Accept': "application/json"
                },
                body: JSON.stringify({
                    firstName: firstname.firstname,
                    lastName:lastname.lastname,
                    email: email.email,
                    password: password.password
                })
            })
    
         let data= await register.json()
         dispatch(setUser(data));

        if(data.status=='success'){
         dispatch(setAuthentication(true));
         }
        else{
        dispatch(setError(true))
        }
        dispatch(setStatus(STATUS.success));

            
        }catch(e){
         dispatch(setStatus(STATUS.error))
         dispatch(setError(true))
         dispatch(setUser(null))
         dispatch(setAuthentication(false))

        }

    }
 }