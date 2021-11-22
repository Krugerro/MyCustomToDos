import {StoreProvider} from './store/provider';
import Spinner from "./components/Spinner";
import ToDosList from './components/ToDosList';
const App = () => {
 
  return (
    <StoreProvider>
      <Spinner/>
      <ToDosList/>
    </StoreProvider>
  );
}

export default App;
