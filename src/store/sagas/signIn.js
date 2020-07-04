import { call, put, takeLatest } from 'redux-saga/effects'
import Api from '../../services/api'

import { Types } from '../ducks/main'

function* attemptsLogin(action) {
  try {
    const response = yield call(Api, {
      method: 'POST',
      url: '/auth',
      data: action.payload,
    })
    yield put({ type: Types.SET_TOKEN, payload: response.data })
  } catch (e) {
    console.log(e, 'error')
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
}

export function* loginWatcherSaga() {
  yield takeLatest(Types.ASYNC_SET_TOKEN_SAGA, attemptsLogin)
}
