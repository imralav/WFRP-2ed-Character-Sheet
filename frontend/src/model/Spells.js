import lodash from 'lodash';

export const UPDATE_SPELL_ACTION = 'UPDATE_SPELL_ACTION';
export const ADD_SPELL_ACTION = 'ADD_SPELL_ACTION';
export const DELETE_SPELL_ACTION = 'DELETE_SPELL_ACTION';

const DEFAULT_SPELLS = [];

export default (state = DEFAULT_SPELLS, action) => {
    const newState = lodash.cloneDeep(state);
    switch(action.type) {
        case UPDATE_SPELL_ACTION:
            newState[action.index][action.propertyName] = action.value;
            break;
        case ADD_SPELL_ACTION:
            newState.push({name: '', castingNumber: 0, castingTime: 0, ingredient: '', description: ''});
            break;
        case DELETE_SPELL_ACTION:
            newState.splice(action.index, 1);
            break;
    }
    return newState;
}