import { call, put, takeLatest } from 'redux-saga/effects'
import Api from '../../services/api'

import { Types } from '../ducks/main'

function* attemptsRegister(action) {
  try {
    console.log('here')
    const response = yield call(Api, {
      method: 'POST',
      url: '/register',
      data: action.payload,
    })
    yield put({ type: Types.SET_TOKEN, payload: response.data })
  } catch (e) {
    console.log(e, 'error')
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
}

export function* registerWatcherSaga() {
  yield takeLatest(Types.ASYNC_REGISTER_SAGA, attemptsRegister)
}
