import { Button, Table} from 'react-bootstrap';
import React, { useContext, useState } from 'react';
import {UseContext} from "./UseContext"
import {  Link} from "react-router-dom";
import "./Home.css"

const Home = () => {
   
    const [user, setUser]=useContext(UseContext)
    console.log(user)
    return (
        <div>
            <Link to="/create">
            <Button variant="primary">Create User</Button></Link>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nmae</th>
                        <th>userName</th>
                        <th>Phone</th>
                        <th>email</th>
                        <th>website</th>
                        
                      
                        
                    </tr>
                </thead>
                <tbody>

                    {
                        user.map(user =>
                            <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>{user.website}</td>
                         <td>
                         <Link to={"/details/"+user.id}>
                           <Button className="btn btn-success">
                                 Details
                             </Button>
                           </Link>

                           <Link to={"/edit/"+user.id}>
                             <Button className="btn btn-primary">
                                 Edit
                             </Button>
                            </Link>

                           <Link to={"/delete/"+user.id}>
                           <Button className="btn btn-danger">
                                 Delete
                             </Button>
                           </Link>
                         </td>
                            
                        </tr>
                            )
                    }
                  
                    
                </tbody>
            </Table>
        </div>
    );
};

export default Home;