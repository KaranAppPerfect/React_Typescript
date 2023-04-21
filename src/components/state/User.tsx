import { useState } from "react"

type userType = {
    name : string,
    email : string
}


export const User = () => {

    // const [user, setUser] = useState<userType | null>(null);
    const [user, setUser] = useState<userType>({} as userType);

    return (
        <>
            <button onClick={() => {
                setUser({name: "Karan", email: "Karan@example.com"})
            }}> 
            LogIn </button>
            {/* <button onClick={() => {setUser({}})}}> Log Out </button> */}
            <h3> User Name  : {user.name} </h3> 
            <h3> User email : {user.email} </h3>
        </>
    )
}