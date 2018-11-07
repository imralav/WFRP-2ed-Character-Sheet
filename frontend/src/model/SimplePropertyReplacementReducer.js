import ObjectPaths from '../utils/ObjectPaths';

const simplePropertyReplacementReducer = (actionName, initialState) => {
    return (state = initialState, action) => {
        if (action.type === actionName) {
            const newState = {...state};
            ObjectPaths.setOnPath(newState, action.propertyName, action.value);
            return newState;
        } else {
            return state;
        }
    };
};

export default simplePropertyReplacementReducer;