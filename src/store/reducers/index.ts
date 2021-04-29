import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {todoReduser} from "./todoReduser";

export const rootReduser = combineReducers({
    user: userReducer,
    todo: todoReduser
})

export type RootState = ReturnType<typeof rootReduser>;