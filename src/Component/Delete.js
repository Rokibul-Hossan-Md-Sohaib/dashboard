import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UseContext } from "./UseContext"
import { Button, Modal } from 'react-bootstrap';

const Delete = () => {
    const [user, setUser] = useContext(UseContext)
    console.log(user)
    const { id } = useParams()
    console.log(id)
    const deleteRow = (id) => {
        const users = user.filter((users) => users.id != id)
        console.log(users)
        setUser(users)
    }
  
    return (
        <div>

            {/* <h1>are you sure</h1> */}
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Link to="/">
                        <Button variant="secondary">Close</Button>
                        <Button onClick={() => deleteRow(id)} variant="danger">
                            Delete
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
};

export default Delete;