import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import React, { useContext }  from 'react';
import { StoreContext } from '../../store/provider';
import { deleteItem } from '../../store/actions';
import { Grid } from '@mui/material';

const DeleteButton : React.FC<{ id : string, hover : boolean }>= ( {id, hover} ) => {

  const { dispatch } = useContext(StoreContext);

  const deleteItemData  =  ( id : string ) : void => {
    fetch(`/${id}`, {method : 'delete'})
    .then(()=> dispatch(deleteItem(id)))
    .catch(e => {
      const error = new Error(`Server communication error.\nDetails:${e}`);
      alert(error); 
    })   
  }
return (
  <>
    {hover &&
    <Grid item xs={1}>
        <IconButton  
          onClick={() => deleteItemData(id)} sx={{opacity:'0.7'}}>
            <DeleteIcon  fontSize="small" />
      </IconButton>
    </Grid>
  }
</>
)};
export default DeleteButton;