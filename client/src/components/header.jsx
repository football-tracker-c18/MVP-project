import React from "react";

const Header =(props)=>{
    return(
        <div className="header">
            <h1 className="t1">Football tracker</h1>
            <h2 className="t2">Welcome to Fottball Tracker website</h2><br/>
            <h3 className="t3">If you are a manager and you have a football team and you want to manage it perfectly. This website do all the work for you</h3><br/>
            <h3 className="t3">If you have already an acount</h3>
            <button className="btn1" onClick={props.changeToLogin}>Login</button><br/>
            <h3 className="t3">Or create an acount</h3>
            <button className="btn1" onClick={props.changeToSignUp}>Sign Up</button>
        </div>
    )

}

export default Header