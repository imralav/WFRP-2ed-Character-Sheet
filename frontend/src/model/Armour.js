import lodash from 'lodash';

function isArmourNotEmpty(armour) {
    return !!armour.type || !!armour.encurbance || !!armour.locationsCovered || !!armour.points;
}

const DEFAULT_ARMOUR = {
    type: '',
    encurbance: '',
    locationsCovered: '',
    points: ''
};

const DEFAULT_ARMOURS = {
    basic: {
        type: '',
        points: ''
    },
    advanced: []
};

export const ADD_ARMOUR_ROW_ACTION = 'ADD_ARMOUR_ROW';
export const DELETE_ARMOUR_ROW_ACTION = 'DELETE_ARMOUR_ROW';
export const UPDATE_ARMOUR_ROW_ACTION = 'UPDATE_ARMOUR_ROW';
export const UPDATE_BASIC_ARMOUR_ACTION = 'UPDATE_BASIC_ARMOUR';

export default (state = DEFAULT_ARMOURS, action) => {
    const newState = lodash.cloneDeep(state);
    switch (action.type) {
        case ADD_ARMOUR_ROW_ACTION:
            newState.advanced.push({...DEFAULT_ARMOUR});
            break;
        case DELETE_ARMOUR_ROW_ACTION:
            newState.advanced.splice(action.index, 1);
            break;
        case UPDATE_ARMOUR_ROW_ACTION:
            newState.advanced[action.index][action.propertyName] = action.value;
            break;
        case UPDATE_BASIC_ARMOUR_ACTION:
            newState.basic[action.propertyName] = action.value;
            break;
    }
    return newState;
}