import { all } from 'redux-saga/effects'

import { MainWatches } from './main'

export default function* rootSaga() {
  return yield all([MainWatches()])
}
