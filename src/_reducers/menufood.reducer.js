import { userConstants } from "../_constants/user.constants";

export function readmenufood(state = {}, action) {
    switch (action.type) {
        case userConstants.MENU_SUCCESS:
            return { menufooding: true };
        case userConstants.MENU_FAILURE:
            return {};
        default:
            return state
    }
}