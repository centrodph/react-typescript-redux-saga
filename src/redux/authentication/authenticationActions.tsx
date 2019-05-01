import { LoginData, ActionType } from '../../model/model';

export const loginUserAction = (payload: LoginData) => {
  return {
    type: ActionType.LOGIN_USER,
    payload
  }
};