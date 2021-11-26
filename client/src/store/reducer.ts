

import { actionTypes, PayloadActions } from "./actions";

import {   StoreInterface, ToDoInterface } from "./provider";

const reducer = (state : StoreInterface , action: PayloadActions ) : StoreInterface  => {
    let toDosCopy : ToDoInterface[];
    let index : number;
    switch (action.type) {
        case actionTypes.DELETE:
            toDosCopy = [...state.toDos].filter(toDo => toDo.id !== action.payload.id);
            return { ...state, toDos: toDosCopy };
        case actionTypes.ADD:
            toDosCopy = [...state.toDos]
            const newEntry : ToDoInterface[] = [action.payload]
            return {...state, toDos: newEntry.concat(toDosCopy)}
        case actionTypes.SET_INEDIT :
            toDosCopy = [...state.toDos];
            index = toDosCopy.findIndex(toDo => toDo.id === action.payload.id);
            toDosCopy[index].inEdit = true;
            return { ...state, toDos: toDosCopy };

        case actionTypes.UPDATE:
            
            return {...state, toDos: action.payload};
            
        case actionTypes.LOAD_ALL:
           
            return {...state, toDos: action.payload};

        case actionTypes.TOGGLE_SPINNER:
            return { ...state, isLoading: !state.isLoading };

        case actionTypes.TOGGLE_HOVER:
            toDosCopy = [...state.toDos];
            index = toDosCopy.findIndex(toDo => toDo.id === action.payload.id);
            toDosCopy[index].hover = action.payload.hover;
            return { ...state, toDos: toDosCopy };

        case actionTypes.CHANGE_COMPLETED :
            toDosCopy = [...state.toDos];
            index = toDosCopy.findIndex(toDo => toDo.id === action.payload.id);
            toDosCopy[index].completed = !toDosCopy[index].completed;
            return { ...state, toDos: toDosCopy };
        default:
            return { ...state };
    }
}

export default reducer;