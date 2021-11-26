import { Box, styled } from "@mui/system";
import { useContext } from "react";
import { StoreContext } from "../../store/provider";
import { Grid , Typography} from '@mui/material';
import FilterStatusButtons from "./FilterStatusButtons";

const Footer : React.FC< {} > = ({}) => {
    
    const {store} = useContext(StoreContext);

    const countLeft = store.toDos.reduce((count, {completed}) => !completed ? count += 1 : count , 0 )


  return (
      <Box sx={[{
        width: '100%',
        height: '40px',
        border : '1px solid',
        borderColor : 'lightgrey',
        mx: 'auto'},
        (theme) => ({padding: theme.spacing(1)})
      ]}>

        <Grid container>
          <Grid item xs={3}>
        
            <Typography sx={{}} variant='caption'>{`${countLeft} item${(countLeft>1 || countLeft === 0) ? 's' : ''} left`}</Typography>
            </Grid>
          <Grid item xs={6}>
            <FilterStatusButtons/>  
          </Grid>  
          <Grid item xs={3}/>
        </Grid>
      </Box>
  )
}

export default Footer;