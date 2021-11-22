export const actionTypes = {
    'ADD' : 'ADD',
    'UPDATE' : 'UPDATE',
    'DELETE' : 'DELETE',
    'LOAD_ALL' : 'LOAD_ALL',
    'TOGGLE_SPINNER' : 'TOGGLE_SPINNER',
};

export const addNewItem = (payload) => {
    return {type: actionTypes.ADD, payload};
};

export const updateItem = (payload) => {
    return {type: actionTypes.UPDATE, data: payload.data, id: payload.id};
};

export const deleteItem = (payload) => {
    return {type: actionTypes.DELETE, data: payload.data, id: payload.id};
};

export const loadData = (payload) => {
    return {type: actionTypes.LOAD_ALL, payload};
}

export const toggleSpinner = () => {
    return {type: actionTypes.TOGGLE_SPINNER}
}