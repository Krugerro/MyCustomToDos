
import { actionTypes } from "./actions";

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.DELETE:
            return state;

        case actionTypes.ADD:
            return state;

        case actionTypes.UPDATE:
            return state;

        case actionTypes.LOAD_ALL:
            return { ...state, toDos: action.payload };

        case actionTypes.TOGGLE_SPINNER:
            return { ...state, isLoading: !state.isLoading }

        case actionTypes.TOGGLE_HOVER:
            const toDosCopy = [...state.toDos];
            const index = toDosCopy.findIndex(toDo => toDo.id === action.id);
            toDosCopy[index].hover = !toDosCopy[index].hover;
            return { ...state, toDos: toDosCopy };

        default:
            return { ...state };
    }
}

export default reducer;