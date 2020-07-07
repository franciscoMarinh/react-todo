export const Types = {
  ON_LOADING_COMPONENT: 'root/ON_LOADING_COMPONENT',
  OFF_LOADING_COMPONENT: 'root/OFF_LOADING_COMPONENT',
}

const initialState = {
  loading: false,
}

export default function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case Types.ON_LOADING_COMPONENT:
      return {
        ...state,
        loading: true,
      }
    case Types.OFF_LOADING_COMPONENT:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
