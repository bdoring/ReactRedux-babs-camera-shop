import axios from 'axios';

export const GET_CAMERAS_PENDING = "GET_CAMERAS_PENDING";
export const GET_CAMERAS_SUCESS = "GET_CAMERAS_SUCESS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";


export const getCameras = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_CAMERAS_PENDING
    });

    let cameras = await axios.get("http://localhost:8000/cameras");
    cameras.data = cameras.data.sort((a, b) => a.title > b.title);

    dispatch({
      type: GET_CAMERAS_SUCESS,
      payload: cameras.data
    });
  }
}

export const addCameraToCart = (e, id) => {
  return async (dispatch) => {
    e.preventDefault();

    let itemToBeAddedToCart = await axios.patch(`http://localhost:8000/cameras/cart/${id}/add`);

    dispatch({
      type: ADD_TO_CART,
      payload: itemToBeAddedToCart.data[0]
    })
  }
}

export const removeCameraFromCart = (id) => {
  return async (dispatch) => {
    let itemToBeRemovedFromCart = await axios.patch(`http://localhost:8000/cameras/cart/${id}/remove`);

    dispatch({
      type: REMOVE_FROM_CART,
      payload: itemToBeRemovedFromCart.data[0]
    })
  }
}
