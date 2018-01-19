export const SORT_BUTTON = "SORT_BUTTON";

export const handleSortButton = (sortOrder) => {
  return (dispatch) => {
    dispatch({
      type: SORT_BUTTON,
      payload: sortOrder
    })
  }
}
