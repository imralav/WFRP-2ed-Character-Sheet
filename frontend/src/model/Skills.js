import lodash from 'lodash';

function createSkill(name) {
    return {
        name,
        level: 0, //0 -> not taken, 1 -> taken, 2 -> +10%, 3 -> +20%
        relatedTalents: ''
    }
}

const DEFAULT_SKILLS = {
    basic: [
        createSkill('animal-care'),
        createSkill('charm'),
        createSkill('command'),
        createSkill('concealment'),
        createSkill('consume-alcohol'),
        createSkill('disguise'),
        createSkill('drive'),
        createSkill('evaluate'),
        createSkill('gamble'),
        createSkill('gossip'),
        createSkill('haggle'),
        createSkill('intimidate'),
        createSkill('outdoor-survival'),
        createSkill('perception'),
        createSkill('ride'),
        createSkill('row'),
        createSkill('scale-sheer-surface'),
        createSkill('search'),
        createSkill('silent-move'),
        createSkill('swim')
    ],
    advanced: []
};

export const ADVANCE_BASIC_SKILL_ACTION = 'ADVANCE_BASIC_SKILL_ACTION';
export const ADVANCE_ADVANCED_SKILL_ACTION = 'ADVANCE_ADVANCED_SKILL_ACTION';
export const UPDATE_ADVANCED_SKILL_ACTION = 'UPDATE_ADVANCED_SKILL_ACTION';
export const UPDATE_BASIC_SKILL_ACTION = 'UPDATE_BASIC_SKILL_ACTION';
export const ADD_ADVANCED_SKILL_ROW_ACTION = 'ADD_ADVANCED_SKILL_ROW_ACTION';
export const DELETE_ADVANCED_SKILL_ROW_ACTION = 'DELETE_ADVANCED_SKILL_ROW_ACTION';

export default (state = DEFAULT_SKILLS, action) => {
    const newState = lodash.cloneDeep(state);
    switch(action.type) {
        case ADVANCE_BASIC_SKILL_ACTION:
            newState.basic[action.index].level = action.level;
            break;
        case ADVANCE_ADVANCED_SKILL_ACTION:
            newState.advanced[action.index].level = action.level;
            break;
        case UPDATE_BASIC_SKILL_ACTION:
            newState.basic[action.index][action.propertyName] = action.value;
            break;
        case UPDATE_ADVANCED_SKILL_ACTION:
            newState.advanced[action.index][action.propertyName] = action.value;
            break;
        case ADD_ADVANCED_SKILL_ROW_ACTION:
            newState.advanced.push(createSkill(''));
            break;
        case DELETE_ADVANCED_SKILL_ROW_ACTION:
            newState.advanced.splice(action.index, 1);
            break;
    }
    return newState;
}