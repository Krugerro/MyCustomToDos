import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import React  from 'react';
const DeleteButton = ({onClick}) => {
return (
    <IconButton aria-label="delete" size="small" onClick= {onClick} style={{padding:'0px'}}>
        <DeleteIcon  fontSize="small" />
  </IconButton>
)};
export default DeleteButton;