
export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export enum ActionType {
    ADD_TODO = 'action/ADD_TODO',
    DELETE_TODO = 'action/DELETE_TODO',
    COMPLETE_TODO = 'action/COMPLETE_TODO',
    UNCOMPLETE_TODO = 'action/UNCOMPLETE_TODO',
    LOGIN_USER = 'action/LOGIN_USER',
    LOGIN_USER_SUCCESS = 'action/LOGIN_USER_SUCCESS',
    LOGIN_USER_ERROR = 'action/LOGIN_USER_ERROR',
}

export interface Action<T> {
    type: ActionType;
    payload: T;
}

export interface LoginData {
    email: string | null;
    password: string | null;
}