
import { actionTypes } from "./actions";
import uniqid from 'uniqid'
const reducer = (state, action) => {
    let toDosCopy;
    let index;
    switch (action.type) {
        case actionTypes.DELETE:
            toDosCopy = [...state.toDos].filter(toDo => toDo.id !== action.id);
            return { ...state, toDos: toDosCopy };
        case actionTypes.ADD:
            return {...state, toDos: [{id: uniqid(), description: null, completed: false, inEdit: true, newItem:true, hover: false}].concat(...state.toDos)}
        case actionTypes.SET_INEDIT :
            toDosCopy = [...state.toDos];
            index = toDosCopy.findIndex(toDo => toDo.id === action.id);
            toDosCopy[index].inEdit = true;
            return { ...state, toDos: toDosCopy };
        case actionTypes.UPDATE:
            toDosCopy = [...state.toDos];
            index = toDosCopy.findIndex(toDo => toDo.id === action.id);
            toDosCopy[index] = {...action.data, inEdit : false,newItem:false};
            return { ...state, toDos: toDosCopy };

        case actionTypes.LOAD_ALL:
            return { ...state, toDos: action.payload };

        case actionTypes.TOGGLE_SPINNER:
            return { ...state, isLoading: !state.isLoading };

        case actionTypes.TOGGLE_HOVER:
            toDosCopy = [...state.toDos];
            index = toDosCopy.findIndex(toDo => toDo.id === action.id);
            toDosCopy[index].hover = action.show;
            return { ...state, toDos: toDosCopy };

        case actionTypes.CHANGE_COMPLETED :
            toDosCopy = [...state.toDos];
            index = toDosCopy.findIndex(toDo => toDo.id === action.id);
            toDosCopy[index].completed = !toDosCopy[index].completed;
            return { ...state, toDos: toDosCopy };
        default:
            return { ...state };
    }
}

export default reducer;