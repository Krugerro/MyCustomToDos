import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

const AppContainer = ({ children }) => {
    return (
        <CssBaseline>
            <Container maxWidth="sm">
                {children}
            </Container>)
        </CssBaseline>
    )
};

export default AppContainer;