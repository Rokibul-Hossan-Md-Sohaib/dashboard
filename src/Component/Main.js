import { Button, Table} from 'react-bootstrap';
import React, { useContext, useState } from 'react';
import {UseContext} from "./UseContext"
import {  Link} from "react-router-dom";
import "./Home.css"

const Main = () => {
   
    const [product, setProduct]=useContext(UseContext)
    console.log(product)
    return (
        <div>
            <Link to="/mCreate">
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
                        product.map(user =>
                            <tr>
                  <Link to="/home">
                  <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                    
                  </Link>
                         <td>
        
                        
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

export default Main;