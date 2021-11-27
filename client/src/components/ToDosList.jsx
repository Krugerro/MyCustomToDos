import { Container, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import { StoreContext } from '../store/provider';
import ToDosItem from './ToDoItem/ToDosItem';

const ToDosList = () => {
    const { store } = useContext(StoreContext);
    return (
        <div sx={{ overflowY: 'auto', maxHeight: '80vh', marginBottom: '5px' }}>
            <Stack spacing={1} >
                {store.toDos.filter(todo => todo.visible).map((item, index) => {
                    return (
                        <ToDosItem key={index} item={item}></ToDosItem>
                    );
                })}
            </Stack>
        </div>
    )
};
export default ToDosList;