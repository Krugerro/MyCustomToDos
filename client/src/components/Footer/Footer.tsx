import { Box } from "@mui/system";
import { useContext } from "react";
import { StoreContext } from "../../store/provider";
import { Button, Grid } from '@mui/material';
import FilterStatusButtons from "./FilterStatusButtons";
import { deleteCompleted } from "../../store/actions";

const Footer : React.FC< {} > = ({}) => {
    
    const {store, dispatch} = useContext(StoreContext);

    const countLeft = store.toDos.reduce((count, {completed}) => !completed ? count += 1 : count , 0 )

    const countCompleted = store.toDos.length - countLeft

    const clearCompleted = () : void => {
      fetch(`deletecompleted`, {method : 'delete', headers: {'Content-Type': 'application/json'}})
      .then(() => dispatch(deleteCompleted()))
      .catch(e => {
          const error = new Error(`Server communication error.\nDetails:${e}`);
          alert(error); 
        })
    }
  return (
      <Box sx={[{
        width: '100%',
        height: '40px',
        border : '1px solid',
        borderColor : 'lightgrey',
        borderRadius : '5px',
        },
        (theme) => ({paddingTop: theme.spacing(0.5)})
      ]}>

        <Grid container>
          <Grid item xs={3}>
        
              <Button size='small' sx={{textTransform : 'none'}} disabled>{`${countLeft} item${(countLeft>1 || countLeft === 0) ? 's' : ''} left`}</Button>
          </Grid>
          <Grid item xs={6}>
            <FilterStatusButtons/>  
          </Grid>  
          <Grid item xs={3}>
            { countCompleted > 0 && <Button size='small' sx={{textTransform : 'none'}} onClick={()=>clearCompleted()}>Clear completed</Button>}
          </Grid>
        </Grid>
      </Box>
  )
}

export default Footer;