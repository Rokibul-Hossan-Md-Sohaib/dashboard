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
                        <th>instrument</th>
                        <th>exchanges</th>
                        <th>tradingsymbol</th>
                        <th>name</th>
                        <th>last_price</th>
                        <th>expiry</th>
                        <th className="strike">strike</th>
                        <th className="strike">tick_size</th>
                        <th>lot_size</th>
                        <th>instrument_type</th>
                        <th>segment</th>
                        <th>exchange</th>
                        {/* <th>Action</th> */}
                    </tr>
                </thead>
                <tbody>

                    {
                        user.map(user =>
                            <tr>
                            <td>{user.id}</td>
                            <td>{user.instrument}</td>
                            <td>{user.exchanges}</td>
                            <td>{user.tradingsymbol}</td>
                            <td>{user.name}</td>
                            <td>{user.last_price}</td>
                            <td>{user.expiry}</td>
                            <td className="strike">{user.strike}</td>
                            <td className="strike">{user.tick_size}</td>
                            <td>{user.lot_size}</td>
                            <td>{user.instrument_type}</td>
                            <td>{user.segment}</td>
                            <td>{user.exchange}</td>
                            
                        </tr>
                            )
                    }
                  
                    
                </tbody>
            </Table>
        </div>
    );
};

export default Home;