import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utility/firebase.utils";


export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: ()=> null
})



export const UserProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser}


    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListener((user)=>{
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        })
        return unsubscribe;
    },[]);
    

    return (
        <div>
            <UserContext.Provider value={value}> {children} </UserContext.Provider>
        </div>
    ) 
}