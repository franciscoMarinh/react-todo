export const Types = {
  SET_TOKEN: 'root/SET_TOKEN',
  ASYNC_LOGIN_SAGA: 'root/ASYNC_LOGIN_SAGA',
  ASYNC_REGISTER_SAGA: 'root/ASYNC_REGISTER_SAGA',
}

const initialState = {
  token: '',
}

export default function RootReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_TOKEN:
      return {
        ...state,
        token: action.payload.token,
      }
    default:
      return state
  }
}

export const Creators = {
  attempsAuth: (payload) => ({
    type: Types.ASYNC_LOGIN_SAGA,
    payload,
  }),
  attempsRegister: (payload) => ({
    type: Types.ASYNC_REGISTER_SAGA,
    payload,
  }),
}
