import {
  GET_CAMERAS_PENDING,
  GET_CAMERAS_SUCESS,
  ADD_TO_CART,
  REMOVE_FROM_CART } from '../actions/camera.actions';

function updateCamerasInCart(state, action) {
  return state.map(camera => {
    if (camera.id === action.payload.id) {
      return action.payload
    } else {
      return camera;
    }
  })
}

export default (state = [], action) => {
  switch (action.type) {
    case GET_CAMERAS_PENDING:
      return state;

    case GET_CAMERAS_SUCESS:
      return [...action.payload];

    case ADD_TO_CART:
      return updateCamerasInCart(state, action);

    case REMOVE_FROM_CART:
      return updateCamerasInCart(state, action);

    default:
      return state;
  }
}
