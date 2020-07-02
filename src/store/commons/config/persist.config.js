import expireIn from 'redux-persist-transform-expire-in'
import storage from 'redux-persist/lib/storage'
const expiresIn = 8 * 24 * 60 * 60 * 1000

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['main'],
  transforms: [expireIn(expiresIn, 'expirationKey', [])],
}
