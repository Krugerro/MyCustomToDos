import { Button } from '@mui/material';
import  { useContext }  from 'react';
import { addNewItem } from '../store/actions';
import { StoreContext } from '../store/provider';


const AddNew = () => {
    const {dispatch} = useContext(StoreContext);

    const  createNewData =  (url : string) : void => {
        
        fetch(url, {method: 'post'})
        .then( response => response.json())
        .then( response => dispatch(addNewItem(response)))
        .catch(e => {
            const error = new Error(`Server communication error.\nDetails:${e}`);
            alert(error); 
          }) 
    };

return (
    <Button variant="contained" sx ={{width:'100%'}} onClick={()=>createNewData('/create')}>ADD NEW</Button>
)};
export default AddNew;