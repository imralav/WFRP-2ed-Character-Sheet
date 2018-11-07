import simplePropertyReplacementReducer from './SimplePropertyReplacementReducer';

export const UPDATE_EXPERIENCE_POINTS_ACTION = 'UPDATE_EXPERIENCE_POINTS';

const DEFAULT_EXPERIENCE_POINTS = {
    current: 0,
    total: 0
};

export default simplePropertyReplacementReducer(UPDATE_EXPERIENCE_POINTS_ACTION, DEFAULT_EXPERIENCE_POINTS);