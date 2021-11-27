import {StoreProvider} from './store/provider';
import Spinner from "./components/Spinner";
import {Header} from './components/Header';
import AppContainer from './components/AppContainer';
import AddNew from './components/AddNew';
import Footer from './components/Footer/Footer';
import SortableToDoList from './components/SortableToDoList';
const App : React.FC <{}>= () => {

  return (
    <StoreProvider>
      <AppContainer>
        <Spinner/>
        <Header/>
        <AddNew/>
        <SortableToDoList/>
        <Footer/>
      </AppContainer>
    </StoreProvider>
  )
};

export default App;
