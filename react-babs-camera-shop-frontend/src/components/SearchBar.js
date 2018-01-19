import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSearchBar } from '../actions/searchBar.actions';

const SearchBar = (props) => {
  return (
    <div style={{margin: "20px"}}>
        <input
          placeholder="Search"
          onChange={(e) => props.updateSearchBar(e.target.value)}
          value={props.searchBar}
        />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateSearchBar: updateSearchBar }, dispatch);
}

export default connect(null, mapDispatchToProps) (SearchBar);
