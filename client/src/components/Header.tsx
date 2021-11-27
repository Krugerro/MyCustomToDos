import {  Container, Typography } from "@mui/material";


export const Header : React.FC<{}> = () => {
    return (
        <Container>
            <Typography variant='h3' color = 'lightgrey' textAlign = 'center'>My to dos</Typography>
        </Container>
    )
};