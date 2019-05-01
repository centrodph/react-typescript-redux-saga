import { all } from 'redux-saga/effects';
import authenticationSagas from './authentication/authenticationSaga';

export default function* startForman() {
  yield all([
    ...authenticationSagas,
  ]);
}