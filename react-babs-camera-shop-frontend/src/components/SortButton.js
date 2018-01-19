import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleSortButton } from '../actions/sortButton.actions';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class SortButton extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret >
            Sort By:
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem value="nameASC" onClick={(e) => this.props.handleSortButton(e.target.value)}>Name A - Z</DropdownItem>
            <DropdownItem divider />
            <DropdownItem value="nameDESC" onClick={(e) => this.props.handleSortButton(e.target.value)}>Name Z - A</DropdownItem>
            <DropdownItem divider />
            <DropdownItem value="priceASC" onClick={(e) => this.props.handleSortButton(e.target.value)}>Price Low - High</DropdownItem>
            <DropdownItem divider />
            <DropdownItem value="priceDESC" onClick={(e) => this.props.handleSortButton(e.target.value)}>Price High - Low</DropdownItem>
            <DropdownItem divider />
            <DropdownItem value="reviewDESC" onClick={(e) => this.props.handleSortButton(e.target.value)}>Highest Reviews</DropdownItem>
            <DropdownItem divider />
            <DropdownItem value="reviewASC" onClick={(e) => this.props.handleSortButton(e.target.value)}>Lowest Reviews</DropdownItem>
          </DropdownMenu>
      </ButtonDropdown>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ handleSortButton: handleSortButton }, dispatch);
}

export default connect(null, mapDispatchToProps) (SortButton);
