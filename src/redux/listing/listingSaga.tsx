import { put, takeLatest, fork, call } from 'redux-saga/effects';

import { createApiCall, listingRoute, MethodType } from 'services/Api';
import { ActionType } from 'model/model';

// login
function* getListingSaga({ payload }: { payload?: string }) {
  try {

    const response = yield call(
      createApiCall, { method: MethodType.GET, url: `${listingRoute}${payload ? `?timestamp=${payload}` : ''}`, data: undefined, auth: true }
    );
    if (response.status === 'ok') {
      yield put({ type: ActionType.LISTING_REQUEST_SUCCESS, payload: response.data.saleListings });
    } else {
      yield put({ type: ActionType.LOGIN_USER_ERROR, payload: 'error' })
    }

  } catch (error) {
    yield put({ type: ActionType.LISTING_REQUEST_ERROR, payload: error })
  }
}
function* onLoginSubmitWatcher() {
  yield takeLatest(ActionType.LISTING_REQUEST as any, getListingSaga);;
}

export default [
  fork(onLoginSubmitWatcher),
];