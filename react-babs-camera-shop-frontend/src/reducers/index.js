import { combineReducers } from 'redux';
import cameras from './camera.reducer'
import searchBar from './searchBar.reducer';
import sortButton from './sortButton.reducer';

export default combineReducers({
  cameras,
  searchBar,
  sortButton
});
