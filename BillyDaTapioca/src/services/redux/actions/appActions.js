export const ACTIVE_MODAL = "ACTIVE_MODAL";
export const DISMISS_MODAL = "DISMISS_MODAL";


export function activeModal(value) {
    return {
        type: ACTIVE_MODAL,
        value
    };
}

export function dismissModal(value) {
    return {
        type: DISMISS_MODAL,
        value
    };
}   