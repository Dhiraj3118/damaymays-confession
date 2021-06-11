import React, { useState } from 'react'

const Login = (props) => {
    const [password, setPassword] = useState("");
    const handleInput = (e) => {
        setPassword(e.target.value);
        if (e.target.value === process.env.REACT_APP_ADMIN_PASSWORD) {
            let obj = {
                "password": e.target.value
            }
            localStorage.setItem("adminObject", JSON.stringify(obj));
            props.setAdmin(true);
        }
    }
    return (
        <div className="login">
            <input type="password" placeholder="Enter Admin Password" value={password} onChange={handleInput} />
        </div>
    )
}
export default Login;