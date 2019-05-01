import { History } from "history";
import { combineReducers } from "redux";
import { Todo } from "../model/model";
import * as todoReducer from "../redux/todo/todoReducer";
import { authenticationReducer, AuthenticationReducerType } from '../redux/authentication/authenticationReducer';

export interface RootState {
	todoList: Todo[];
	loginForm: AuthenticationReducerType
}

export default (history: History) =>
	combineReducers({
		...todoReducer,
		loginForm: authenticationReducer,
	});
