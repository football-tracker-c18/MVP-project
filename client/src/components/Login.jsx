import React from "react";


const Login = (props)=>{
    return(
        <div className="login">
            <label >name: </label>
            <input type="text" name="name"  />
            <label >password: </label>
            <input type="password" name="password" />
            <button >Login</button>
        </div>
    )
}

export default Login