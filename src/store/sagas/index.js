import { all } from 'redux-saga/effects'

import { loginWatcherSaga } from './auth'

export default function* rootSaga() {
  return yield all([loginWatcherSaga()])
}
