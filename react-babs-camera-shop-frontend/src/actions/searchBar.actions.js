export const UPDATE_SEARCH_BAR = "UPDATE_SEARCH_BAR";

export const updateSearchBar = (updatedSearch) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_SEARCH_BAR,
      payload: updatedSearch
    })
  }
}
