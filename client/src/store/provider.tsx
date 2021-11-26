import React, { useEffect, useReducer, createContext } from "react";
import reducer from "./reducer";
import { loadData, PayloadActions, toggleSpinner } from "./actions";
import { filterStatus } from "../components/Footer/FilterStatusButtons";

export interface ToDoInterface {
    id: string;
    description : string;
    completed : boolean;
    inEdit : boolean;
    hover : boolean;
    newItem : boolean;
    visible : boolean;
};


export interface StoreInterface {
    toDos : ToDoInterface[],
    isLoading : boolean;
    filterActive : string
};

const initialState : StoreInterface = {
    toDos: [],
    isLoading: true,
    filterActive : filterStatus.ALL
};

interface StoreContextInterface {
    store: StoreInterface;
    dispatch : React.Dispatch<PayloadActions>;
  }

const StoreContext = createContext<StoreContextInterface>({
    store: initialState,
    dispatch:  () => null,
  });

const StoreProvider: React.FC<{ children :  React.ReactNode} > = ({children})=> {
    const [store, dispatch] = useReducer(reducer, initialState);
    useEffect( () => {
    fetch('/list')
        .then(response => response.json())
        .then(response => {
            dispatch(loadData(response));
            dispatch(toggleSpinner())}
        );
    }, [])
    return (
        <StoreContext.Provider value={{ store, dispatch }}>
            {children}
        </StoreContext.Provider>
    )
}

export { StoreProvider, StoreContext };