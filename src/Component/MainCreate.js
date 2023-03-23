import React, { useContext,useState } from 'react';
import { Button, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {UseContext} from "./UseContext"


const MainCreate = () => {
    const [product, setProduct]=useContext(UseContext)

    const [id, setId] =useState("")
    const [userid, setUserId] =useState("")
    const [title, setTitle] =useState("")
    const [phone, setPhone] =useState("")
    const [email, setEmail] =useState("")
   
    const updateid =(e) =>{
        setId(e.target.value)
        console.log(id)
    };
    const updateTitle =(e) =>{
        setTitle(e.target.value)
    };
    const updateUserId =(e) =>{
        setUserId(e.target.value)
    };
    const updatePhone =(e) =>{
        setPhone(e.target.value)
    };
    const updateEmail =(e) =>{
        setEmail(e.target.value)
    };

  
    const addUser =(e) =>{
        e.preventDefault();
        console.log(product)
        setProduct([...product, {id:id, userid:userid ,title:title,email:email}])
    }
  
    return (
        <div>
            <Form onSubmit={addUser}>
              
            
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>name</Form.Label>
                    <Form.Control 
                    type="text"
                    name="name"
                    value={userid}
                    onChange={updateUserId} 
                    placeholder="Enter please" />
                </Form.Group>

                <Form.Group controlId="formGroupPassword">
                    <Form.Label>username</Form.Label>
                    <Form.Control 
                    type="text"
                    name="name"
                    value={title}
                    onChange={updateTitle} 
                    placeholder="Enter please" />
                </Form.Group>
{/* 
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>phone</Form.Label>
                    <Form.Control  
                    type="text"
                    name="phone"
                    value={name}
                    onChange={updatePhone} 
                    placeholder="Enter please" />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>email</Form.Label>
                    <Form.Control  
                    type="text"
                    name="email"
                    value={name}
                    onChange={updateEmail} 
                    placeholder="Enter please" />
                </Form.Group> */}

        <Button className="action_btn" variant="primary"
                 type="submit" >
                    Create User
                </Button>
                {/* <Link to ="/">
                <Button  type="submit" value="Submit">
                   Home
                </Button>
                </Link> */}
                
                
            </Form>
        </div>
    );
};

export default MainCreate;