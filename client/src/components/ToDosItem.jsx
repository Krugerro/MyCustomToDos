import { useContext } from 'react';
import styled from 'styled-components';
import { toggleHover } from '../store/actions';
import { StoreContext } from '../store/provider';
import  {CenteredDiv}  from './Header';


const GridStyled = styled.div`
    display:grid;
    grid-template-columns: 80px 1fr 1fr;
    border: 1px solid black;
    padding: 1%;
    border-radius : 10px;
`
const OverflowEllipsisDiv = styled.div`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`
const ToDosItem = ({item}) => {
    const {dispatch} = useContext(StoreContext);
    const { id, description, completed, edit , hover} = item
 return (
    <GridStyled onMouseEnter={() => dispatch(toggleHover({id}))} onMouseLeave ={() => dispatch(toggleHover({id}))}>
        <CenteredDiv align='left'>
            <input type="checkbox" checked={completed} onChange={()=>{console.log(id)}}/>
        </CenteredDiv>
        <OverflowEllipsisDiv>{description}</OverflowEllipsisDiv>
        {hover && <CenteredDiv>
            <button>Delete</button>
    </CenteredDiv>}
    </GridStyled>
 )  
} 
export default ToDosItem;