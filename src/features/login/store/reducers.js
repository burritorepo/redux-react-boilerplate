import { initialState } from './State';
import { LOGIN_SUCCESS } from './Constants';

const Login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      const { payload: { response } } = action;
      return Object.assign({}, state, {
        loginSuccess: response
      });
    }
    default:
      return state;
  }
}

export {
  Login
}
