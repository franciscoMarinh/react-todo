import { all } from 'redux-saga/effects'

import { loginWatcherSaga } from './signIn'
import { registerWatcherSaga } from './signUp'

export default function* rootSaga() {
  return yield all([loginWatcherSaga(), registerWatcherSaga()])
}
