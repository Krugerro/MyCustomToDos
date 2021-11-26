import { Stack } from '@mui/material';
import React, { useContext }  from 'react';
import {StoreContext} from '../store/provider';
import ToDosItem from './ToDoItem/ToDosItem';

const ToDosList = () => {
    const {store} = useContext(StoreContext);
return (
<div style={{overflowY : 'auto', maxHeight : '80vh', marginBottom : '5px'}}>
<Stack spacing={1} >
    {store.toDos.map((item,index)=> {
        return (
            <ToDosItem index={index} key={index} item={item}></ToDosItem>
        );
    })}
</Stack>
</div>
)};
export default ToDosList;