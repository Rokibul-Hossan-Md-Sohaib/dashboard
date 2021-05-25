import React, { useContext,useState } from 'react';
import { Button, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {UseContext} from "./UseContext"


const Create = () => {
    const [user, setUser]=useContext(UseContext)


    const [id, setId] =useState("")
    const [instrument, setInstrument] =useState("")
    const [exchanges, setExchanges] =useState("")
    const [tradingsymbol, setTradingsymbol] =useState("")
    const [name, setName] =useState("")
    const [last_price, setLast_price] =useState("")
    const [expiry, setExpiry] =useState("")
    const [strike, setStrike] =useState("")
    const [tick_size, setTick_size] =useState("")
    const [lot_size, setLot_size] =useState("")
    const [instrument_type, setInstrument_type] =useState("")
    const [segment, setSegment] =useState("")
    const [exchange, setExchange] =useState("")
   

    const updateid =(e) =>{
        setId(e.target.value)
        console.log(id)
    };
    const updateinstrument =(e) =>{
        setInstrument(e.target.value)
    };
    const updateexchanges =(e) =>{
        setExchanges(e.target.value)
    };
    const updatetradingsymbol =(e) =>{
        setTradingsymbol(e.target.value)
    };

    const updatename =(e) =>{
        setName(e.target.value)
    };
    const updatelast_price =(e) =>{
        setLast_price(e.target.value)
    };
    const updateexpiry =(e) =>{
        setExpiry(e.target.value)
    };
    const updatestrike =(e) =>{
        setStrike(e.target.value)
    };
    const updatetick_size =(e) =>{
        setTick_size(e.target.value)
    };
    const updatelot_size =(e) =>{
        setLot_size(e.target.value)
    };
    const updateinstrument_type =(e) =>{
        setInstrument_type(e.target.value)
    };
    const updatesegment =(e) =>{
        setSegment(e.target.value)
    };
    const updateexchange =(e) =>{
        setExchange(e.target.value)
    };



    const addUser =(e) =>{
        e.preventDefault();
        console.log(user)
        setUser([...user, {id:id, instrument:instrument,exchanges:exchanges,
            tradingsymbol:tradingsymbol,name:name,last_price:last_price,
            expiry:expiry,strike:strike, tick_size:tick_size, lot_size:lot_size,
            instrument_type:instrument_type, segment:segment, exchange:exchange}])
    }
  
    return (
        <div>
            <Form onSubmit={addUser}>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Id</Form.Label>
                    <Form.Control 
                    type="text"
                    name="id"
                    value={id}
                    onChange={updateid} 
                    placeholder="Enter please" />
                </Form.Group>


                <Form.Group controlId="formGroupPassword">
                    <Form.Label>instrument</Form.Label>
                    <Form.Control  type="text"
                    name="instrument"
                    value={instrument}
                    onChange={updateinstrument} 
                    placeholder="Enter please" />
                </Form.Group>

                <Form.Group controlId="formGroupEmail">
                    <Form.Label>exchanges</Form.Label>
                    <Form.Control  type="text"
                    name="exchange"
                    value={exchanges}
                    onChange={updateexchanges} 
                    placeholder="Enter please" />
                </Form.Group>

                <Form.Group controlId="formGroupPassword">
                    <Form.Label>tradingsymbol</Form.Label>
                    <Form.Control 
                    type="text"
                    name="tradingsymbol"
                    value={tradingsymbol}
                    onChange={updatetradingsymbol} 
                    placeholder="Enter please" />
                </Form.Group>

                <Form.Group controlId="formGroupEmail">
                    <Form.Label>name</Form.Label>
                    <Form.Control  
                    type="text"
                    name="name"
                    value={name}
                    onChange={updatename} 
                    placeholder="Enter please" />
                </Form.Group>

                <Form.Group controlId="formGroupPassword">
                    <Form.Label>last_price</Form.Label>
                    <Form.Control 
                     type="text"
                    name="last_price"
                    value={last_price}
                    onChange={updatelast_price} 
                    placeholder="Enter please"/>
                </Form.Group>

                <Form.Group controlId="formGroupEmail">
                    <Form.Label>expiry</Form.Label>
                    <Form.Control type="text"
                    name="expiry"
                    value={expiry}
                    onChange={updateexpiry} 
                    placeholder="Enter please"/>
                </Form.Group>

                <Form.Group controlId="formGroupEmail">
                    <Form.Label>strike</Form.Label>
                    <Form.Control 
                     type="text"
                    name="strike"
                    value={strike}
                    onChange={updatestrike} 
                    placeholder="Enter please" />
                </Form.Group>


                <Form.Group controlId="formGroupPassword">
                    <Form.Label>tick_size</Form.Label>
                    <Form.Control 
                     type="text"
                    name="tick_size"
                    value={tick_size}
                    onChange={updatetick_size} 
                    placeholder="Enter please" />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>lot_size</Form.Label>
                    <Form.Control  type="text"
                    name="lot_size"
                    value={lot_size}
                    onChange={updatelot_size} 
                    placeholder="Enter please" />
                </Form.Group>


                <Form.Group controlId="formGroupPassword">
                    <Form.Label>instrument_type</Form.Label>
                    <Form.Control  
                    type="text"
                    name="instrument_type"
                    value={instrument_type}
                    onChange={updateinstrument_type} 
                    placeholder="Enter please"/>
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>segment</Form.Label>
                    <Form.Control  type="text"
                    name="segment"
                    value={segment}
                    onChange={updatesegment} 
                    placeholder="Enter please"/>
                </Form.Group>


                <Form.Group controlId="formGroupPassword">
                    <Form.Label>exchange</Form.Label>
                    <Form.Control  type="text"
                    name="exchange"
                    value={exchange}
                    onChange={updateexchange} 
                    placeholder="Enter please" />
                </Form.Group>

           
                <Button className="action_btn" variant="primary"
                 type="submit" >
                    Create User
                </Button>
                <Link to ="/">
                <Button  type="submit" value="Submit">
                   Home
                </Button>
                </Link>
                
                
            </Form>
        </div>
    );
};

export default Create;