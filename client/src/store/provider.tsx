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
    toDos: [],
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
    useEffect(() => {
        dispatch(loadData([...initialStateToDos]));
        dispatch(toggleSpinner());
    }, [])
    return (
        <StoreContext.Provider value={{ store, dispatch }}>
            {children}
        </StoreContext.Provider>
    )
}

export { StoreProvider, StoreContext };

const initialStateToDos : ToDoInterface[] = [
    { id: '1', description: 'AAAAAAAAAAAAAAAAAA', completed: false, inEdit: false, hover: false, newItem: false },
    { id: '2', description: 'BBBBB', completed: true, inEdit: false , hover: false, newItem: false  },
   
]