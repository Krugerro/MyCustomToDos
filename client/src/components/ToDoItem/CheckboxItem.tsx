import { Checkbox } from "@mui/material"
import { useContext } from "react";
import { changeCompleted, changeFilter } from "../../store/actions";
import { StoreContext } from "../../store/provider";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';


const CheckboxItem : React.FC<{ id : string, completed : boolean }>= ( {id, completed} ) => {
const {store, dispatch} = useContext(StoreContext);

    const changeCompletedData  = ( id : string ) : void => {
        fetch(`/${id}`, {method : 'put', headers: {'Content-Type': 'application/json'}})
        .then(() => { 
                dispatch(changeCompleted(id));
                dispatch(changeFilter(store.filterActive));
        })
        .catch(e => {
            const error = new Error(`Server communication error.\nDetails:${e}`);
            alert(error); 
          })
      }

    return (
        
        <Checkbox
            size="medium"
            icon ={<CircleOutlinedIcon/>}
            checkedIcon={<CheckCircleIcon  />}
            checked={completed}
            onChange={() => changeCompletedData(id)}
        />
   
    )
}
export default CheckboxItem;