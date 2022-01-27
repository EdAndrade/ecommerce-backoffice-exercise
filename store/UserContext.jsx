import { createContext, useState, useContext } from "react";
import { API } from '../services/api/index';

export const UserContext = createContext();

export function UserProvider( { children } ){

    const [user, setUser] = useState({});

    async function loginUser(){

        API.admins.performLogin(user).then( response => {
            if(response.data.length > 0){
                setUser(response.data[0]);
            }
        })
    }

    return (

        <UserContext.Provider value={ { user, loginUser } } >
            { children }
        </UserContext.Provider>
    );
}

export function useUser(){
    const context = useContext(UserContext);
    return context;
}