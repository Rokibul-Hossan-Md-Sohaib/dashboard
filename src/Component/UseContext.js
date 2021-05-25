import React, {  createContext, useState } from 'react';


export const UseContext = createContext()

export const UseProvider = (props) => {
    const [user, setUser] = useState([
        {
            id: 1, instrument: "5.41E+08", exchanges: "2111660",
            tradingsymbol: "EURINR20DEC77.7500CE", name: "EURINR",
            last_price: "0", expiry: "12/29/2020", strike: "77.75",
            tick_size: "0.0025", lot_size: "1", instrument_type: "CE",
            segment: "BCD-OPT", exchange: "BCD"

        }
      
    ])
    return (
        <UseContext.Provider value={[user, setUser]}>
            {props.children}
        </UseContext.Provider>
    );
};


