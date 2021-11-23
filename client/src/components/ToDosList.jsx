import { Stack } from '@mui/material';
import React, { useContext }  from 'react';
import {StoreContext} from '../store/provider';
import ToDosItem from './ToDoItem/ToDosItem';

const ToDosList = () => {
    const {store} = useContext(StoreContext);
return (
<Stack spacing={1}>
    {store.toDos.map((item,index)=> {
        return (
            <ToDosItem  key={index} item={item}></ToDosItem>
        );
    })}
</Stack>
)};
export default ToDosList;