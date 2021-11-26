import React, { useEffect, useReducer, createContext } from "react";
import reducer from "./reducer";
import { loadData, PayloadActions, toggleSpinner } from "./actions";

export interface ToDoInterface {
    id: string;
    description : string;
    completed : boolean;
    inEdit : boolean;
    hover : boolean;
    newItem : boolean;
};


export interface StoreInterface {
    toDos : ToDoInterface[],
    isLoading : boolean;
};

const initialState : StoreInterface = {
    toDos: [{id:'0' , description: '', completed: false, inEdit: true, hover: true, newItem: true }],
    isLoading: true
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
    const  loadAllData = async () :  Promise<any> => {
        const serverResponse = await fetch('/list')
        .then(response => response.json())
        .then(response => response);
        dispatch(loadData(serverResponse));
        dispatch(toggleSpinner());
    }
         loadAllData();
    }, [])
    return (
        <StoreContext.Provider value={{ store, dispatch }}>
            {children}
        </StoreContext.Provider>
    )
}

export { StoreProvider, StoreContext };