import styled from "styled-components";

const Container= styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const Title = styled.h2`
    color:black;
    text-transform: uppercase;
`
export const CenteredDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${props => props.align === 'left' ? "left" : "right"};
`
const StyledButton = styled.button`

`
export const Header = () => {
    return (
        <Container>
            <Title>My to dos</Title>
            <CenteredDiv>
                <StyledButton>One</StyledButton>
                <StyledButton>Two</StyledButton>
            </CenteredDiv>
        </Container>
    )
};