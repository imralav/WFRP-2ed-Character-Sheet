import simplePropertyReplacementReducer from "./SimplePropertyReplacementReducer";

const DEFAULT_PLAYER = {name: '',gameMaster: '',campaign: '',campaignYear: ''};
export const UPDATE_PLAYER_ACTION = 'UPDATE_PLAYER';
export default simplePropertyReplacementReducer(UPDATE_PLAYER_ACTION, DEFAULT_PLAYER);