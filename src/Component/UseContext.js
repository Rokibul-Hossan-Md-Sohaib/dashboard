import React, {  createContext, useState } from 'react';
import { useEffect } from 'react';


export const UseContext = createContext()

export const UseProvider = (props) => {
    const [user, setUser] = useState([
        // {
        //     id: 1, name: "Kuddus", phone: "+9908756",email:"kuddus@gmail.com"
           

        // }
      
    ])

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data =>setUser(data))

    } ,[])
    return (
        <UseContext.Provider value={[user, setUser]}>
            {props.children}
        </UseContext.Provider>
    );
};


