import simplePropertyReplacementReducer from "./SimplePropertyReplacementReducer";

const DEFAULT_CHARACTER = {name: '', race: '', currentCareer: '', previousCareers: ''};
export const UPDATE_CHARACTER_ACTION = 'UPDATE_CHARACTER';
export default simplePropertyReplacementReducer(UPDATE_CHARACTER_ACTION, DEFAULT_CHARACTER);