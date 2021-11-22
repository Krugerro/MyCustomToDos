import React, { useContext }  from 'react';
import styled from 'styled-components';
import {StoreContext} from '../store/provider';
import ToDosItem from './ToDosItem';

const StyledContainer = styled.div`
    display:grid;
    row-gap: 10px;
    overflow-y: auto;
    max-height: 70vh;

`

const ToDosList = () => {
    const {store,dispatch} = useContext(StoreContext);
return (
<StyledContainer>
    {store.toDos.map((item,index)=> {
        return (
            <ToDosItem  key={index} item={item}></ToDosItem>
        );
    })}
</StyledContainer>
)};
export default ToDosList;