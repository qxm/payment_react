import React , { useEffect, useState } from 'react';

import { SERVER_URL } from '../constants.js';
//import AuthContext from './AuthContext';
import Stack from '@mui/material/Stack';
import TopUp from './TopUp';
import Pay from './Pay';

function ClientInfo() {
  //const authContext = React.useContext(AuthContext);
  const [name, setName] = useState('');
  const [balance, setBalance] = useState('');
  useEffect(() => {
    fetchClient();
  },[]);

  const fetchClient = () => {
    // Read the token from the session storage
    // and include it to Authorization header 
    const token = sessionStorage.getItem("jwt"); 

    fetch(SERVER_URL + 'v1/payment/client', {
      headers: { 'Authorization' : token }
    })
    .then(response => response.json())
    .then(data => {
         setName(data.name);
         setBalance(data.balance);
     })
    .catch(err => console.error(err));    
  }

  const topUp = (amount) => {
    const token = sessionStorage.getItem("jwt"); 

    fetch(SERVER_URL  +  'v1/payment/topup',
      { method: 'PATCH', headers: {
        'Content-Type':'application/json',
        'Authorization' : token
      },
      body: amount
    })
    .then(response => {
      if (response.ok) {
        fetchClient();
      }
      else {
        alert('Something went wrong!');
      }
    })
    .catch(err => console.error(err))
  }

  const pay = (payment) => {
    const token = sessionStorage.getItem("jwt");

    fetch(SERVER_URL  +  `v1/payment/pay/${payment.to}`,
      { method: 'PATCH', headers: {
        'Content-Type':'application/json',
        'Authorization' : token
      },
      body: payment.amount
    })
    .then(response => {
      if (response.ok) {
        fetchClient();
      }
      else {
        alert('Something went wrong!');
      }
    })
    .catch(err => console.error(err))
  }

  return( 
    <React.Fragment>
      <Stack spacing={2} mt={2} mb={2}>
        <TopUp topUp={topUp} />
        <Pay pay={pay} />
      </Stack>
      <div style={{ height: 500, width: '100%' }}>
        <p>Hello {name}</p>
        <p>Your balance: {balance}</p>
      </div>
    </React.Fragment>
   );
}

export default ClientInfo;;
