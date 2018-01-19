import { SORT_BUTTON } from '../actions/sortButton.actions';

export default (state = "", action) => {
  switch (action.type) {
    case SORT_BUTTON:
      return action.payload;

    default:
      return state;
  }
}
