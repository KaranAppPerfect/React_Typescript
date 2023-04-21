import { useState } from "react"

export const Login = () => {

    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <>
            <button onClick={() => setLoggedIn(true)}> LogIn </button>
            <button onClick={() => setLoggedIn(false)}> Log Out </button>
            <h3> User is Logged { loggedIn ? 'In' : 'Out' } </h3>
        </>
    )
}