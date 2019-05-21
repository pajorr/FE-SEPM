import { userConstants } from "../_constants/user.constants";

export function readmenu(state = {}, action) {
    switch (action.type) {
        case userConstants.MENU_SUCCESS:
            return { menuing: true };
        case userConstants.MENU_FAILURE:
            return {};
        default:
            return state
    }
}