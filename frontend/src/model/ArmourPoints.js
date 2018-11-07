import simplePropertyReplacementReducer from "./SimplePropertyReplacementReducer";

const DEFAULT_ARMOUR_POINTS = {
    head: 0,
    rightArm: 0,
    leftArm: 0,
    body: 0,
    rightLeg: 0,
    leftLeg: 0
};

export const UPDATE_ARMOUR_POINTS_ACTION = 'UPDATE_ARMOUR_POINTS';
export default simplePropertyReplacementReducer(UPDATE_ARMOUR_POINTS_ACTION, DEFAULT_ARMOUR_POINTS);