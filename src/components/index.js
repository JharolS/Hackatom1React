import React from 'react';
import "./index.css";

const Loggin = () => {
    return (
        <div className="loggin">
            <div>Username</div>
            <textarea></textarea>
            <div>Password</div>
            <textarea></textarea>
            <div>Forgot Password?</div>
            <button>Login</button>
            <div>Create Account</div>
        </div> 
    )
}

export default Loggin;