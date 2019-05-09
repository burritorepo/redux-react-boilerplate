import {
  LOGIN_SUCCES,
} from './constants'

const loginSuccess = (response) => {
  return {
      type: LOGIN_SUCCES,
      payload: {
        response
    }
  }
}

export {
  loginSuccess,
}
