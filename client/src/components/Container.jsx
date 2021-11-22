import styled from "styled-components";

const ContainerStyled = styled.div`
    text-align: left;
    min-width : 350px;
    width: 60%;
    margin: 25px;
    justify-content: center;
    align-items: center;
`

const Container = ({children}) => {
    return(
    <ContainerStyled>
        {children}
    </ContainerStyled>)
};

export default Container