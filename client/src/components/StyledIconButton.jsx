import React  from 'react';
import styled from 'styled-components';
import trash from '../images/trash.png';

const StyledButton = styled.div`
    border: 0; 
    background: transparent;
    width:30%;
`
const StyledIconButton = ({onClick}) => {
return (
    <StyledButton type="submit" onClick={onClick}>
        <img src={trash} width="100%"  alt="submit" />
    </StyledButton>
)};
export default StyledIconButton;