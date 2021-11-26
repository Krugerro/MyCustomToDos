import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

const AppContainer : React.FC<{ children :  React.ReactNode} > = ({children})=> {
    return (
        <CssBaseline>
            <Container maxWidth="sm">
                {children}
            </Container>)
        </CssBaseline>
    )
};

export default AppContainer;