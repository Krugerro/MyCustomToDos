import React, { useEffect, useReducer, createContext } from "react";
import reducer from "./reducer";
import { loadData, toggleSpinner } from "./actions";

const initialState = {
    toDos: [],
    isLoading: true
}

const StoreContext = createContext(initialState)

const StoreProvider = ({ children }) => {
    const [store, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        dispatch(loadData(initialStateToDos));
        dispatch(toggleSpinner());
    }, [])
    return (
        <StoreContext.Provider value={{ store, dispatch }}>
            {children}
        </StoreContext.Provider>
    )
}

export { StoreProvider, StoreContext };

const initialStateToDos = [
    { id: 1, description: 'AAAA', completed: false, edit: false },
    { id: 2, description: 'BBBBB', completed: true, edit: false },
]