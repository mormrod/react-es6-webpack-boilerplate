import { LOGIN_CLICK } from './actions';

function loginIsClicked(state = false, action) {
  switch (action.type) {
    case LOGIN_CLICK:
      return true;
    default:
      return state;
  }
}

export default loginIsClicked;
