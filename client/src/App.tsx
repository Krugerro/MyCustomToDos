import {StoreProvider} from './store/provider';
import Spinner from "./components/Spinner";
import ToDosList from './components/ToDosList';
import {Header} from './components/Header';
import AppContainer from './components/AppContainer';
import AddNew from './components/AddNew';
const App : React.FC <{}>= () => {
  return (
    <StoreProvider>
      <AppContainer>
        <Spinner/>
        <Header/>
        <AddNew/>
        <ToDosList/>
      </AppContainer>
    </StoreProvider>
  )
};

export default App;
