import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UseContext } from "./UseContext"
import { Button } from 'react-bootstrap';




const Details = () => {
    const [user, setUser] = useContext(UseContext)
    console.log(user)
    const { id } = useParams()
    console.log(id)
    // const users = user.filter((users) => users.id == id)
    // setUser(users)
     
    return (
        <div className="detail">
          
           <h1>Name: {user[id].id}</h1>
            <h1>Name: {user[id].name}</h1>
            <h1>useName: {user[id].username}</h1>
            <h1>ID: {user[id].email}</h1>
            <h1>ID: {user[id].phone}</h1>
            <h1>ID: {user[id].website}</h1>
            <Link to="/">
            <Button btn btn-primary>Close</Button>
            </Link>
        </div>
    );
};

export default Details;