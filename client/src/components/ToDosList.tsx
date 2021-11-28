import {  Stack } from '@mui/material';
import  { useContext } from 'react';
import { StoreContext } from '../store/provider';
import ToDosItem from './ToDoItem/ToDosItem';

import {SortableContainer} from 'react-sortable-hoc'
import { Box } from '@mui/system';

const ToDosList = SortableContainer( () => {
    const { store } = useContext(StoreContext);
    
    return (
        <Box sx={{ overflowY: 'auto', maxHeight: '80vh', marginBottom: '5px' }}>
            <Stack spacing={1} >
                {store.toDos.filter(todo => todo.visible).map((item, index) => {
                    return (
                        <ToDosItem key={`item-${index}`} item={item} index={index} ></ToDosItem>
                    );
                })}
            </Stack>
        </Box>
    )
});
export default ToDosList;