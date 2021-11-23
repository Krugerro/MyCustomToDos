import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { changeCompleted, deleteItem, hideHover, openEditMode, showHover, updateItem } from '../../store/actions';
import { StoreContext } from '../../store/provider';
import  {CenteredDiv}  from '../Header';
import StyledIconButton from '../StyledIconButton';


const GridStyled = styled.div`
    display:grid;
    grid-template-columns: 10% auto 10%;
    border: 1px solid black;
    padding: 1%;
    border-radius : 10px;
    box-shadow: 0px 2px 5px grey;
    margin-top: 5px;
    margin-bottom: 5px;
`
const OverflowEllipsisDiv = styled.div`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size : 16px;
`

const StyledInput = styled.input`
    width : 100%;
    border : 0;
    appearance : none;
    -webkit-appearance: none;
    font-size : 16px;
`
const ToDosItem = ({item}) => {
    const { dispatch} = useContext(StoreContext);
    const { id, description, completed, inEdit , hover, newItem} = item
    const [value, setValue ] = useState('');
    useEffect(()=> {
        if (newItem) {
            setValue('');
        }
    },[newItem])
    const checkIfEnter = (e) => {
        if(e.key === 'Enter'){
            dispatch(updateItem({data: {...item, description: value}, id : id}));
          }
    }
    const onLostFocus = () => {
        dispatch(updateItem({data: {...item, description: value}, id : id}));
    }
    const changeValue = (e) => {
        setValue(e.target.value);
    };

    const startEdit = (isCompleted) => {
    if (!isCompleted)
        {setValue(description || '');
        dispatch(openEditMode(id));
    }
    };

 return (
    <GridStyled 
        onMouseEnter = {() => dispatch(showHover({id}))} 
        onMouseLeave = {() => dispatch(hideHover({id}))}>

        <CenteredDiv align='center'>
            <input type="checkbox" checked={completed} onChange={()=>dispatch(changeCompleted(id))}/>
        </CenteredDiv>

        <OverflowEllipsisDiv onDoubleClick={()=>startEdit(completed)}>

            {inEdit ? <StyledInput 
                        type='text' 
                        value={value} 
                        autoFocus 
                        onBlur ={onLostFocus} 
                        onKeyPress={(e)=>checkIfEnter(e)} 
                        onChange={(e) => changeValue(e)}/> 
                    : <>{description}</>
            }
            
        </OverflowEllipsisDiv>

        {hover && <CenteredDiv>
            <StyledIconButton onClick={()=> dispatch(deleteItem(id))}/>
        </CenteredDiv>}

    </GridStyled>
 )  
} 
export default ToDosItem;