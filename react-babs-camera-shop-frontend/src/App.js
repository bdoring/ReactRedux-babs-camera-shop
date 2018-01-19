import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCameras } from './actions/camera.actions';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import Miss from './components/Miss';


class App extends Component {
  componentDidMount() {
    this.props.getCameras();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="*" component={Miss} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

// export default App;
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getCameras: getCameras }, dispatch);
}

export default connect(null, mapDispatchToProps) (App);
