import * as UserActionCreators from "./user";
import * as TodoActionCreators from "./todo";
import * as PhotoActionCreators from "./photo";

export default {
    ...TodoActionCreators,
    ...UserActionCreators,
    ...PhotoActionCreators
}
