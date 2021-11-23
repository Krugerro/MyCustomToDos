import React, { useContext }  from 'react';
import styled from 'styled-components';
import { addNewItem } from '../store/actions';
import { StoreContext } from '../store/provider';

const StyledAddButton= styled.div`
    width: 10wh;
    height: 10vh;
    border-radius: 500px;
`

const AddNew = () => {
    const {dispatch} = useContext(StoreContext);
return (
<StyledAddButton onClick={()=>dispatch(addNewItem())}>ADD NEW</StyledAddButton>
)};
export default AddNew;