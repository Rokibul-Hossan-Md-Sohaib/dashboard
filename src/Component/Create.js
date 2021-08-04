import React, { useContext,useState } from 'react';
import { Button, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {UseContext} from "./UseContext"


const Create = () => {
    const [user, setUser]=useContext(UseContext)


    const [id, setId] =useState("")
    const [name, setName] =useState("")
    const [userName, setUserName] =useState("")
    const [phone, setPhone] =useState("")
    const [email, setEmail] =useState("")
   

    const updateid =(e) =>{
        setId(e.target.value)
        console.log(id)
    };
    const updateName =(e) =>{
        setName(e.target.value)
    };
    const updateUserName =(e) =>{
        setUserName(e.target.value)
    };
    const updatePhone =(e) =>{
        setPhone(e.target.value)
    };
    const updateEmail =(e) =>{
        setEmail(e.target.value)
    };

  


    const addUser =(e) =>{
        e.preventDefault();
        console.log(user)
        setUser([...user, {id:id, name:name,userName:userName ,phone:phone,email:email}])
    }
  
    return (
        <div>
            <Form onSubmit={addUser}>
              
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>id</Form.Label>
                    <Form.Control  type="text"
                    name="id"
                    value={id}
                    onChange={updateid} 
                    placeholder="Enter please" />
                </Form.Group>

                <Form.Group controlId="formGroupPassword">
                    <Form.Label>name</Form.Label>
                    <Form.Control 
                    type="text"
                    name="name"
                    value={name}
                    onChange={updateName} 
                    placeholder="Enter please" />
                </Form.Group>

                <Form.Group controlId="formGroupPassword">
                    <Form.Label>username</Form.Label>
                    <Form.Control 
                    type="text"
                    name="name"
                    value={name}
                    onChange={updateUserName} 
                    placeholder="Enter please" />
                </Form.Group>

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
                </Form.Group>

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

export default Create;