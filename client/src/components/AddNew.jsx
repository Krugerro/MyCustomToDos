import { Button } from '@mui/material';
import React, { useContext }  from 'react';
import { addNewItem } from '../store/actions';
import { StoreContext } from '../store/provider';


const AddNew = () => {
    const {dispatch} = useContext(StoreContext);
return (
<Button onClick={()=>dispatch(addNewItem())}>ADD NEW</Button>
)};
export default AddNew;