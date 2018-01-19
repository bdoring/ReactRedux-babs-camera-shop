import React from 'react';
import { connect } from 'react-redux';

import Camera from './Camera';
import SortButton from './SortButton';


class CameraList extends React.Component {

  render() {
    let cameras = [...this.props.cameras];

    if (this.props.searchBar) {
      cameras = cameras.filter(camera => camera.title.toLowerCase().includes(this.props.searchBar.toLowerCase()))
    }

    if (this.props.sortButton) {
      switch (this.props.sortButton) {
        case "nameDESC":
          cameras = cameras.sort((a, b) => a.title < b.title);
          break;
        case "priceASC":
          cameras = cameras.sort((a, b) => a.price > b.price);
          break;
        case "priceDESC":
          cameras = cameras.sort((a, b) => a.price < b.price);
          break;
        case "reviewDESC":
          cameras = cameras.sort((a, b) => a.rating < b.rating);
          break;
        case "reviewASC":
          cameras = cameras.sort((a, b) => a.rating > b.rating);
          break;
        default:
          break;
      }
    }

    let cameraList = cameras.map((camera, index) => <Camera key={index} camera={camera} />)


    return (
      <div>
        <SortButton />
        {cameraList}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return ({
    cameras: state.cameras,
    searchBar: state.searchBar,
    sortButton: state.sortButton
  })
}

export default connect(mapStateToProps, null) (CameraList);
