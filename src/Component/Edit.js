import React, { useContext ,useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { UseContext } from "./UseContext"
import { Button, Form} from 'react-bootstrap';

const Edit = () => {
    const [user, setUser] = useContext(UseContext)
    console.log(user)
    const { id } = useParams()
    console.log(id)
    const users = user.filter((users) => users.id == id)
    

    
    
    const [name, setName] =useState(users[0].name)
    const [userName, setUserName] =useState(users[0].userName)
    const [phone, setPhone] =useState(users[0].phone)
    const [email, setEmail] =useState(users[0].email)
   

  
    const editedName =(e) =>{
        setName(e.target.value)
        const edited_name =userName;
        user[0].name=edited_name;
    };
    const editedUserName =(e) =>{
        setUserName(e.target.value)
        const edited_username =userName;
        user[0].userName=edited_username;
    };
    const editedPhone =(e) =>{
        setPhone(e.target.value)
        const edited_phone =phone;
        user[0].phone= edited_phone;
    };
    const editedEmail =(e) =>{
        setEmail(e.target.value)
        const edited_email =email;
        user[0].email=edited_email
    };

  


    const edditUser =(e) =>{
        e.preventDefault();
        console.log(user)
        setUser([...user])
    }
  
    return (
      
            <div>
            <div>
            <Form >
              
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>id:{users[0].id}</Form.Label>
                </Form.Group>

                <Form.Group controlId="formGroupPassword">
                    <Form.Label>name</Form.Label>
                    <Form.Control 
                    type="text"
                    name="name"
                    value={name}
                    onChange={editedName} 
                    placeholder={users[0].name}/>
                </Form.Group>
                
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>username</Form.Label>
                    <Form.Control 
                    type="text"
                    name="urerName"
                    value={userName}
                    onChange={editedUserName} 
                    placeholder={users[0].username} />
                </Form.Group>

                <Form.Group controlId="formGroupEmail">
                    <Form.Label>phone</Form.Label>
                    <Form.Control  
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={editedPhone} 
                    placeholder={users[0].phone}/>
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>email</Form.Label>
                    <Form.Control  
                    type="text"
                    name="email"
                    value={email}
                    onChange={editedEmail} 
                    placeholder={users[0].email}/>
                </Form.Group>

                <Link to="/">
        <Button onSubmit={() => edditUser} className="action_btn" variant="primary"
                 type="submit" >
                    Create User
                </Button>
                </Link>
                {/* <Link to ="/">
                <Button  type="submit" value="Submit">
                   Home
                </Button>
                </Link> */}
                
                
            </Form>
        </div>
        </div>
    );
};

export default Edit;