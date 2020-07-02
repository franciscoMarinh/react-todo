export const Types = {
  SET_TOKEN: 'root/SET_TOKEN',
  ASYNC_SET_TOKEN_SAGA: 'root/ASYNC_SET_TOKEN_SAGA',
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
  attempsAuth: (data) => ({
    type: Types.ASYNC_SET_TOKEN_SAGA,
    payload: {
      ...data,
    },
  }),
}
