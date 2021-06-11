import React, { useEffect, useState } from 'react'
import Confessions from './components/Confessions';
import Login from './components/Login';

const Admin = () => {
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        let pswd = JSON.parse(localStorage.getItem("adminObject"))
        if (pswd && pswd["password"] === process.env.REACT_APP_ADMIN_PASSWORD) {
            setAdmin(true);
        }
    }, [])

    return (
        <div>
            {admin && <Confessions />}
            {!admin && <Login admin={admin} setAdmin={setAdmin} />}
        </div>
    )
}

export default Admin;