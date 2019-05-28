import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { alert } from './alert.reducer';
import { readmenu } from "./menu.reducer";
import { readmenufood } from "./menufood.reducer";

const rootReducer = combineReducers({
    authentication,
    registration,
    alert,
    readmenu,
    readmenufood,
});

export default rootReducer;