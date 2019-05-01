import * as TodoActions from "./todo/todoActions";
import * as AuthenticationActions from './authentication/authenticationActions'

export const ActionCreators = Object.assign({}, {...TodoActions, ...AuthenticationActions });
