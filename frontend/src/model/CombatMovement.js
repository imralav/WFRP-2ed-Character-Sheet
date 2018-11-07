import simplePropertyReplacementReducer from "./SimplePropertyReplacementReducer";

const DEFAULT_COMBAT_MOVEMENT = {
    moveDisengage: 0,
    chargeAttack: 0,
    run: 0
};
export const UPDATE_COMBAT_MOVEMENT_ACTION = 'UPDATE_COMBAT_MOVEMENT_ACTION';
export default simplePropertyReplacementReducer(UPDATE_COMBAT_MOVEMENT_ACTION, DEFAULT_COMBAT_MOVEMENT);