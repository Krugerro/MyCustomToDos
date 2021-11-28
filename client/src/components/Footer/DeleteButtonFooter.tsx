import { Button } from "@mui/material";
import { useContext } from "react";
import { deleteCompleted } from "../../store/actions";
import { StoreContext } from "../../store/provider";

const DeleteButtonFooter: React.FC<{ countCompleted: number }> = ({ countCompleted }) => {
    const { dispatch } = useContext(StoreContext);

    const clearCompleted = (): void => {
        fetch(`deletecompleted`, { method: 'delete', headers: { 'Content-Type': 'application/json' } })
            .then(() => dispatch(deleteCompleted()))
            .catch(e => {
                const error = new Error(`Server communication error.\nDetails:${e}`);
                alert(error);
            })
    }

    return (
        <>
            {countCompleted > 0 && 
                <Button size='small' 
                        sx={{ textTransform: 'none' }} 
                        onClick={() => clearCompleted()}>
                        Clear completed</Button>}
        </>
    )
};

export default DeleteButtonFooter;