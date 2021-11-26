import { ToDoInterface } from "./provider";

export enum actionTypes {
    'ADD' = 'ADD',
    'UPDATE' = 'UPDATE',
    'DELETE' = 'DELETE',
    'LOAD_ALL' = 'LOAD_ALL',
    'TOGGLE_SPINNER' = 'TOGGLE_SPINNER',
    'TOGGLE_HOVER' = 'TOGGLE_HOVER',
    'SET_INEDIT' = 'SET_INEDIT',
    'CHANGE_COMPLETED' = 'CHANGE_COMPLETED',
};

type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
    }
    : {
        type: Key;
        payload: M[Key];
    }
};

type Payload = {
    [actionTypes.ADD]: ToDoInterface;
    [actionTypes.UPDATE]: ToDoInterface;
    [actionTypes.DELETE]: {
        id: string
    };
    [actionTypes.TOGGLE_HOVER]: {
        id: string;
        hover: boolean
    };
    [actionTypes.CHANGE_COMPLETED]: {
        id: string
    };
    [actionTypes.SET_INEDIT]: {
        id: string;
        inEdit: boolean;
    };
    [actionTypes.TOGGLE_SPINNER]: boolean;
    [actionTypes.LOAD_ALL]: ToDoInterface[];

}

export type PayloadActions = ActionMap<Payload>[keyof ActionMap<Payload>];


export const  addNewItem =  (payload: ToDoInterface): PayloadActions => {


    return { type: actionTypes.ADD, payload: payload }
};


export const updateItem = (payload: ToDoInterface): PayloadActions => {
    return { type: actionTypes.UPDATE, payload: payload };
};

export const deleteItem = (id: string): PayloadActions => {
    return { type: actionTypes.DELETE, payload: { id } };
};

export const loadData = (payload: ToDoInterface[]): PayloadActions => {

    return { type: actionTypes.LOAD_ALL, payload: payload };
};

export const toggleSpinner = (): PayloadActions => {
    return { type: actionTypes.TOGGLE_SPINNER, payload: true }
};
export const showHover = (id: string): PayloadActions => {
    return { type: actionTypes.TOGGLE_HOVER, payload: { id, hover: true } };
};
export const hideHover = (id: string): PayloadActions => {
    return { type: actionTypes.TOGGLE_HOVER, payload: { id, hover: false } };
};
export const openEditMode = (id: string): PayloadActions => {
    return { type: actionTypes.SET_INEDIT, payload: { id, inEdit: true } };
}
export const changeCompleted = (id: string): PayloadActions => {
    return { type: actionTypes.CHANGE_COMPLETED, payload: { id } };
}