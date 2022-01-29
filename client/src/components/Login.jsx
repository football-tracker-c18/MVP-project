import React from "react";


const Login = (props)=>{
    return(
        <div className="login">
            {props.err === 1 && <h3>"you don't have an acount you need to sign up first"</h3>}
            <label className="l1">name: </label>
            <input className="i1" onChange={props.signUpInput} type="text" name="name"  />
            <label  className="l1">password: </label>
            <input  className="i1" onChange={props.signUpInput} type="password" name="password" />
            <button className="btn1" onClick={props.login}>Login</button>
        </div>
    )
}

export default Login