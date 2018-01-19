import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { getCameras } from '../actions/camera.actions';
import CameraList from './CameraList';
import ShoppingCart from './ShoppingCart';
import SearchBar from './SearchBar';

import { Container, Row, Col } from 'reactstrap';

class Main extends Component {

  render () {
    return (
      <Container>
        <SearchBar />
        <Row>
          <Col sm="12" md="6">
            <CameraList />
          </Col>
          <Col sm="12" md="6">
            <ShoppingCart />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Main;
