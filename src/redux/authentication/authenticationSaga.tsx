import { put, takeLatest, fork, call } from 'redux-saga/effects';

import { createApiCall, loginRoute, MethodType } from 'services/Api';
import { LoginData, ActionType } from '../../model/model';

// login
function* loginSaga({ payload } : { payload: LoginData}) {
  try {

    const response = yield call(
      createApiCall, { method: MethodType.POST, url: loginRoute, data: payload }
    );
    const { body, status } = response;
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