import simplePropertyReplacementReducer from "./SimplePropertyReplacementReducer";

const DEFAULT_PERSONAL_DETAILS = {
    age: 0,
    gender: '',
    eyeColor: '',
    weight: 0,
    hairColor: '',
    height: 0,
    starSign: '',
    numberOfSiblings: 0,
    birthplace: '',
    distinguishingMarks: ''
};
export const UPDATE_PERSONAL_DETAILS_ACTION = 'UPDATE_PERSONAL_DETAILS_ACTION';
export default simplePropertyReplacementReducer(UPDATE_PERSONAL_DETAILS_ACTION, DEFAULT_PERSONAL_DETAILS);