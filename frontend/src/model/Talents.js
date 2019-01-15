import lodash from 'lodash';

export const UPDATE_TALENT_ACTION = 'UPDATE_TALENT_ACTION';
export const ADD_TALENT_ACTION = 'ADD_TALENT_ACTION';
export const DELETE_TALENT_ACTION = 'DELETE_TALENT_ACTION';

const DEFAULT_TALENTS = [];

export default (state = DEFAULT_TALENTS, action) => {
    const newState = lodash.cloneDeep(state);
    switch(action.type) {
        case UPDATE_TALENT_ACTION:
            newState[action.index][action.propertyName] = action.value;
            break;
        case ADD_TALENT_ACTION:
            newState.push({name: '', description: ''});
            break;
        case DELETE_TALENT_ACTION:
            newState.splice(action.index, 1);
            break;
    }
    return newState;
}