import { CHANGE_SERVICE_FIELD } from '../actions/actionTypes';

const initialState = {
  id: '',
  name: '',
  price: '',
};

export default function serviceFormReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    default:
      return state;
  }
}
