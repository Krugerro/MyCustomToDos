import { Button } from '@mui/material';
import  { useContext }  from 'react';
import { addNewItem } from '../store/actions';
import { StoreContext, ToDoInterface } from '../store/provider';


const AddNew = () => {
    const {dispatch} = useContext(StoreContext);

    const  createNewData = async (url : string) :  Promise<any> => {
        const serverResponse = await fetch(url, {method: 'post'});
       
        const data : ToDoInterface = await serverResponse.json();
 
        if (serverResponse.ok) {
            dispatch(addNewItem(data));
        }
        else {
            const error = new Error('Server communication error');
            alert(error); 
        }
    };

return (
<Button variant="contained" style={{width:'100%'}} onClick={()=>createNewData('/create')}>ADD NEW</Button>
)};
export default AddNew;