import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

function Pay(props) {
  const [open, setOpen] = useState(false);
  const [payment, setPayment] = useState({
    to: '',
    amount: ''});  

  // Open the modal form
  const handleClickOpen = () => {
    setOpen(true);
  };
    
  // Close the modal form 
  const handleClose = () => {
    setOpen(false);
  };
  
  const handleChange = (event) => {
    setPayment({...payment, [event.target.name]: event.target.value});
  }

  // Save car and close modal form 
  const handleSave = () => {
    props.pay(payment);
    handleClose();
  }
  
  return(
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Pay To
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Top Up</DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
               <TextField label="Pay To" name="to" autoFocus
                variant="standard" value={payment.to}
                onChange={handleChange}/>
              <TextField label="Amount" name="amount" autoFocus
                variant="standard" value={payment.amount} 
                onChange={handleChange}/>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>            
    </div>
  );
}

export default Pay;
