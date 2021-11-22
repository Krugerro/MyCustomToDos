
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
            return { toDos: action.payload };
        case actionTypes.TOGGLE_SPINNER:
        default:
            return { ...state, isLoading: false };
    }
}

export default reducer;