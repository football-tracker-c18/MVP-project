import React from "react";

const Header =(props)=>{
    return(
        <div className="header">
            <h1>Football tracker</h1>
            <h3>Welcome to Fottball Tracker website</h3><br/>
            <h4>If you have already an acount</h4>
            <button onClick={props.changeToLogin}>Login</button><br/>
            <h4>Or create an acount</h4>
            <button onClick={props.changeToSignUp}>Sign Up</button>
        </div>
    )

}

export default Header