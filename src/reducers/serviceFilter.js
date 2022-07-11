import { CHANGE_FILTER_FIELD } from '../actions/actionTypes';

const initialState = {
  filter: ''
};

export default function serviceFilterReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FILTER_FIELD:
      const { filter } = action.payload;
      return { ...state, filter };
    default:
      return state;
  }
}
