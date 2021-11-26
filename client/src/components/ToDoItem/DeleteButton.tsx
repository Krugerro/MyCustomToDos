import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import React, { useContext }  from 'react';
import { StoreContext } from '../../store/provider';
import { deleteItem } from '../../store/actions';
import { Grid } from '@mui/material';

const DeleteButton : React.FC<{ id : string, hover : boolean }>= ( {id, hover} ) => {

  const { dispatch } = useContext(StoreContext);

  const deleteItemData  = async ( id : string , url : string) : Promise<any> => {

    const serverResponse = await fetch(`/${id}`, {method : 'delete'});
       
    if (serverResponse.ok) {
        dispatch(deleteItem(id));
    }
    else {
        const error = new Error('Server communication error');
        alert(error); 
    }

  }
return (
  <>
    {hover &&
    <Grid item xs={1}>
        <IconButton  size="small" onClick={() => deleteItemData(id, '/delete')} style={{padding:'0px'}}>
            <DeleteIcon  fontSize="small" />
      </IconButton>
    </Grid>
  }
</>
)};
export default DeleteButton;