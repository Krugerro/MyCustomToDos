import { Checkbox, Grid } from "@mui/material"
import { useContext } from "react";
import { changeCompleted } from "../../store/actions";
import { StoreContext } from "../../store/provider";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';


const CheckboxItem : React.FC<{ id : string, completed : boolean }>= ( {id, completed} ) => {
const {dispatch} = useContext(StoreContext);
    const changeCompletedData  = async ( id : string ) : Promise<any> => {

        const serverResponse = await fetch(`/${id}`, {method : 'put', headers: {'Content-Type': 'application/json'}});
           
        if (serverResponse.ok) {
            dispatch(changeCompleted(id));
        }
        else {
            const error = new Error('Server communication error');
            alert(error); 
        }
      }

    return (
        <Grid item xs={1}>
        <Checkbox
            size="small"
            icon ={<CircleOutlinedIcon/>}
            checkedIcon={<CheckCircleIcon  />}
            checked={completed}
            onChange={() => changeCompletedData(id)}
        />
    </Grid>
    )
}
export default CheckboxItem;