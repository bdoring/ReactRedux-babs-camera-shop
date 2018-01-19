import React from 'react';
import ReactStars from 'react-stars'
import { Card, CardText, CardBody, Button, CardTitle, CardSubtitle } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCameraToCart } from '../actions/camera.actions';

const Camera = ({ camera, addCameraToCart }) => {
  let cardStyle = {
    height: "500px",
    width: "500px"
  }

  return (
    <div style={cardStyle}>
      <Card style={{ "borderRadius": "5px"}}>
        <CardBody>
          <CardTitle>{camera.title}</CardTitle>
          <CardSubtitle className={camera.on_sale ? "text-danger" : null}>
            Price: ${(camera.price).toFixed(2)}
            {camera.on_sale ? " - On Sale!" : null}
          </CardSubtitle>
        </CardBody>
        <img src={camera.image} alt="" />
        <CardBody >
          <CardText>Rating:
            <div style={{ "margin": "0 auto", "width": "115px"}}>
              <ReactStars value={camera.rating} edit={false} size={20} half={true}/>
            </div>

          </CardText>
          <Button
            color="primary"
            href="#"
            onClick={(e) => addCameraToCart(e, camera.id)}
            >Add To Cart</Button>
        </CardBody>
      </Card>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addCameraToCart: addCameraToCart }, dispatch);
}

export default connect(null, mapDispatchToProps) (Camera);
