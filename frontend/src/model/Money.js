import simplePropertyReplacementReducer from "./SimplePropertyReplacementReducer";

const DEFAULT_MONEY = {crowns: 0, schillings: 0, pennies: 0};
export const UPDATE_MONEY_ACTION = 'UPDATE_MONEY';
export default simplePropertyReplacementReducer(UPDATE_MONEY_ACTION, DEFAULT_MONEY);