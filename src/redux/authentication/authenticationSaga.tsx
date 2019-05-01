import { put, takeLatest, fork } from 'redux-saga/effects';

// import { registerUserService, loginUserService } from 'services/authenticationService';
import { LoginData, ActionType } from '../../model/model';

// login
function* loginSaga(payload: LoginData) {
  try {
    yield put({ type: ActionType.LOGIN_USER_SUCCESS, payload: 'success' });
  } catch (error) {
    yield put({ type: ActionType.LOGIN_USER_ERROR, payload: 'error' })
  }
}
function* onLoginSubmitWatcher() {
  yield takeLatest(ActionType.LOGIN_USER as any, loginSaga);;
}

export default [
  fork(onLoginSubmitWatcher),
];