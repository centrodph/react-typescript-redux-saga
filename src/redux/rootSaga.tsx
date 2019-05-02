import { all } from 'redux-saga/effects';

import authenticationSagas from 'redux/authentication/authenticationSaga';
import listinSagas from 'redux/listing/listingSaga';

export default function* startForman() {
  yield all([
    ...authenticationSagas,
    ...listinSagas,
  ]);
}