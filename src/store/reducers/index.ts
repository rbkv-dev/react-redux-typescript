import {combineReducers} from "redux";
import {userReducer} from "./userReducer";

export const rootReduser = combineReducers({
    user: userReducer,
})

export type RootState = ReturnType<typeof rootReduser>;