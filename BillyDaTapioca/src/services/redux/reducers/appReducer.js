import * as appActions from '../actions/appActions';


const INITIAL_STATE = {
    modalVisibility: false
};

export default function appReducer(state = INITIAL_STATE, action) {
    console.log(action);
    switch(action.type) {
        case appActions.ACTIVE_MODAL:
            return Object.assign(state, {
                modalVisibility: action.value
            });
        case appActions.DISMISS_MODAL:
            return Object.assign(state, {
                modalVisibility: action.value
            });
        default:
            return state;
    }
}