import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

function TopUp(props) {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState('');

  // Open the modal form
  const handleClickOpen = () => {
    setOpen(true);
  };
    
  // Close the modal form 
  const handleClose = () => {
    setOpen(false);
  };
  
  const handleChange = (event) => {
    setAmount(event.target.value);
  }

  // Save car and close modal form 
  const handleSave = () => {
    props.topUp(amount);
    handleClose();
  }
  
  return(
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Top Up
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Top Up</DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
              <TextField label="Amount" name="amount" autoFocus
                variant="standard" value={amount} 
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

export default TopUp;
