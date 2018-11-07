import lodash from 'lodash';

const DEFAULT_WEAPON = {
    name: '',
    encurbance: '',
    group: '',
    damage: '',
    range: '',
    reload: '',
    qualities: ''
};

function isWeaponNotEmpty(weapon) {
    return !!weapon.name || !!weapon.encurbance || !!weapon.group || !!weapon.damage || !!weapon.range || !!weapon.reload || !!weapon.qualities;
}

export const ADD_WEAPON_ROW_ACTION = 'ADD_WEAPON_ROW';
export const DELETE_WEAPON_ROW_ACTION = 'DELETE_WEAPON_ROW';
export const UPDATE_WEAPON_ROW_ACTION = 'UPDATE_WEAPON_ROW';

export default (state = [], action) => {
    const newState = lodash.cloneDeep(state);
    switch (action.type) {
        case ADD_WEAPON_ROW_ACTION:
            newState.push({...DEFAULT_WEAPON});
            break;
        case DELETE_WEAPON_ROW_ACTION:
            newState.splice(action.index, 1);
            break;
        case UPDATE_WEAPON_ROW_ACTION:
            newState[action.index][action.propertyName] = action.value;
            break;
    }
    return newState;
};