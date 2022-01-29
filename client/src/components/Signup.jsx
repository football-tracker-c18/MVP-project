import React from "react";

const Signup = (props)=>{
    return(
        <div className="signup">
            <label >name: </label>
            <input onChange={props.signUpInput} type="text" name="name"  />
            <label >password: </label>
            <input onChange={props.signUpInput} type="password" name="password" />
            <label >email: </label>
            <input onChange={props.signUpInput} type="email" name="email" />
            <label >phone: </label>
            <input onChange={props.signUpInput} type="number" name="phone" /><br/>
            <button onClick={props.signUp}>Sign Up</button>
        </div>
    )
}

export default Signup