
export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export interface Listing {
    city: string;
    postId: string;
    title: string;
    contentSnippet: string;
    link: string;
    viewed: boolean;
    emailed: boolean;
    postedTimestamp: number;
    createdTimestamp: number;
}

export enum ActionType {
    // login
    LOGIN_USER = 'action/LOGIN_USER',
    LOGIN_USER_SUCCESS = 'action/LOGIN_USER_SUCCESS',
    LOGIN_USER_ERROR = 'action/LOGIN_USER_ERROR',
    // listing
    LISTING_REQUEST = 'action/LISTING_REQUEST',
    LISTING_REQUEST_SUCCESS = 'action/LISTING_REQUEST_SUCCESS',
    LISTING_REQUEST_ERROR = 'action/LISTING_REQUEST_ERROR',    
}

export interface Action<T> {
    type: ActionType;
    payload: T;
}

export interface LoginData {
    username: string | null;
    password: string | null;
}