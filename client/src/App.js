import {StoreProvider} from './store/provider';
import Spinner from "./components/Spinner";
import ToDosList from './components/ToDosList';
import {Header} from './components/Header';
import AppContainer from './components/AppContainer';
import AddNew from './components/AddNew';
const App = () => {
  return (
    <StoreProvider>
      <AppContainer>
        <Spinner/>
        <Header/>
        <ToDosList/>
        <AddNew/>
      </AppContainer>
    </StoreProvider>
  );
}

export default App;
