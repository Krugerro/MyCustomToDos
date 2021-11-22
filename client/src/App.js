import {StoreProvider} from './store/provider';
import Spinner from "./components/Spinner";
import ToDosList from './components/ToDosList';
import {Header} from './components/Header';
import Container from './components/Container';
import AddNew from './components/AddNew';
const App = () => {
  return (
    <StoreProvider>
      <Container>
        <Spinner/>
        <Header/>
        <ToDosList/>
        <AddNew/>
      </Container>
    </StoreProvider>
  );
}

export default App;
