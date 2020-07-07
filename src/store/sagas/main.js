import { call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import Api from '../../services/api'

import { Types as MainTypes } from '../ducks/main'
import { Types as LoadingTypes } from '../ducks/loading'

function* attemptsLogin(action) {
  try {
    yield put({ type: LoadingTypes.ON_LOADING_COMPONENT })
    const response = yield call(Api, {
      method: 'POST',
      url: '/auth',
      data: action.payload,
    })
    yield put({ type: MainTypes.SET_TOKEN, payload: response.data })
  } catch (e) {
    yield put({ type: LoadingTypes.OFF_LOADING_COMPONENT })
    console.log(e, 'error')
  }
}

function* attemptsRegister(action) {
  try {
    console.log('here')
    const response = yield call(Api, {
      method: 'POST',
      url: '/register',
      data: action.payload,
    })
    yield put({ type: MainTypes.SET_TOKEN, payload: response.data })
  } catch (e) {
    console.log(e, 'error')
  }
}

export function* MainWatches() {
  yield takeEvery(MainTypes.ASYNC_LOGIN_SAGA, attemptsLogin)
  yield takeEvery(MainTypes.ASYNC_REGISTER_SAGA, attemptsRegister)
}
