export const actionTypes = {
    'ADD' : 'ADD',
    'UPDATE' : 'UPDATE',
    'DELETE' : 'DELETE',
    'LOAD_ALL' : 'LOAD_ALL',
    'TOGGLE_SPINNER' : 'TOGGLE_SPINNER',
    'TOGGLE_HOVER' : 'TOGGLE_HOVER',
    'SET_INEDIT' : 'SET_INEDIT',
    'CHANGE_COMPLETED' : 'CHANGE_COMPLETED',
};

export const addNewItem = (payload) => {
    return {type: actionTypes.ADD, payload};
};

export const updateItem = (payload) => {
    return {type: actionTypes.UPDATE, data: payload.data, id: payload.id};
};

export const deleteItem = (id) => {
    return {type: actionTypes.DELETE, id};
};

export const loadData = (payload) => {
    return {type: actionTypes.LOAD_ALL, payload};
};

export const toggleSpinner = () => {
    return {type: actionTypes.TOGGLE_SPINNER}
};
export const showHover = ({id}) => {
    return {type: actionTypes.TOGGLE_HOVER, id:id, show: true};
};
export const hideHover = ({id}) => {
    return {type: actionTypes.TOGGLE_HOVER, id:id, show: false};
};
export const openEditMode = (id) => {
    return {type: actionTypes.SET_INEDIT, id:id};
}
export const changeCompleted = (id) => {
    return {type: actionTypes.CHANGE_COMPLETED, id:id};
}