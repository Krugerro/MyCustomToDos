import { Box } from "@mui/system";
import { useContext } from "react";
import { StoreContext } from "../../store/provider";
import { Grid } from '@mui/material';
import FilterStatusButtons from "./FilterStatusButtons";
import LeftInfo from "./LeftInfo";
import DeleteButtonFooter from "./DeleteButtonFooter";

const Footer: React.FC<{}> = () => {

  const { store } = useContext(StoreContext);

  const countLeft: number = store.toDos.reduce((count, { completed }) => !completed ? count += 1 : count, 0);

  const countCompleted: number = store.toDos.length - countLeft;

  return (
    <Box sx={[{
      width: '100%',
      height: '40px',
      border: '1px solid',
      borderColor: 'lightgrey',
      borderRadius: '5px',
    },
    (theme) => ({ paddingTop: theme.spacing(0.5) })
    ]}>

      <Grid container>
        <Grid item xs={3}>
          <LeftInfo countLeft={countLeft} />
        </Grid>
        <Grid item xs={6}>
          <FilterStatusButtons />
        </Grid>
        <Grid item xs={3}>
          <DeleteButtonFooter countCompleted={countCompleted} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer;