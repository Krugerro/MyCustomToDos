import { useContext } from "react";
import { changeOrder } from "../store/actions";
import { StoreContext } from "../store/provider";
import ToDosList from "./ToDosList";

export const SortableToDoList : React.FC<{}> = () => {
    const {dispatch} = useContext(StoreContext);
    const onSortEnd = ({oldIndex , newIndex  } : {oldIndex : number, newIndex: number}) => {
        
        dispatch(changeOrder(oldIndex, newIndex));
    };

    return (
        <ToDosList pressDelay={200} onSortEnd = {(e :any)=> onSortEnd(e)}/>
    )
};

export default SortableToDoList;