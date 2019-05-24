import { userConstants } from "../_constants/user.constants";
import { userService } from "../_services/user.service";
import { alertActions } from "./alert.actions";
import { history } from "../_helpers/history";

export const userActions = {
    login,
    logout,
    register,
    menu,
};

function login(user) {
    return dispatch => {
        dispatch(request(user));

        userService.login(user)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/menu');
                    dispatch(alertActions.success('Login successful'))
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } } //TODO delete user
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => {
                    dispatch(success());
                    history.push('/')
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };



    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function menu() {
    return dispatch => {
        userService.menu()
            .then(
                res => {
                    dispatch(success());
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            )
    }

    function success() { return { type: userConstants.MENU_SUCCESS } }
    function failure() { return { type: userConstants.MENU_FAILURE} }
}