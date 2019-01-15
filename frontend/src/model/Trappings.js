import lodash from 'lodash';

export const UPDATE_TRAPPING_ACTION = 'UPDATE_TRAPPING_ACTION';
export const ADD_TRAPPING_ACTION = 'ADD_TRAPPING_ACTION';
export const DELETE_TRAPPING_ACTION = 'DELETE_TRAPPING_ACTION';

const DEFAULT_TRAPPINGS = [];

export default (state = DEFAULT_TRAPPINGS, action) => {
    const newState = lodash.cloneDeep(state);
    switch(action.type) {
        case UPDATE_TRAPPING_ACTION:
            newState[action.index][action.propertyName] = action.value;
            break;
        case ADD_TRAPPING_ACTION:
            newState.push({item: '', encurbance: '', description: ''});
            break;
        case DELETE_TRAPPING_ACTION:
            newState.splice(action.index, 1);
            break;
    }
    return newState;
}