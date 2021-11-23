import { useContext } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { StoreContext } from "../store/provider";
import { Backdrop } from "@mui/material";

const Spinner = () => {
    const {store} = useContext(StoreContext);
    return (  
    <Backdrop open = {store.isLoading}>
        <CircularProgress />
    </Backdrop>
    );
}
export default Spinner;