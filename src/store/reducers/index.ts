import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {todoReduser} from "./todoReduser";
import {photoReduser} from "./photoReducer";

export const rootReduser = combineReducers({
    user: userReducer,
    todo: todoReduser,
    photo: photoReduser
})

export type RootState = ReturnType<typeof rootReduser>;