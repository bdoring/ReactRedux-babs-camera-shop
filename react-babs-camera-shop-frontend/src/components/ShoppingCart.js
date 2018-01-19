import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { connect } from 'react-redux';
import ShoppingCartTable from './ShoppingCartTable';


const ShoppingCart = (props) => {

  let camerasInCart = props.cameras.filter(camera => camera.in_cart)

  let subtotal = camerasInCart[0] ? camerasInCart.reduce(((acc, camera) => acc += camera.price), 0).toFixed(2) : null;

  let tax = subtotal ? (Number(subtotal) * 0.086).toFixed(2) : null;

  let total = tax ? (Number(subtotal) + Number(tax)).toFixed(2) : null;


  return (
      <div className="my-shopping-cart">
        <Card body style={{ backgroundColor: '#333', borderColor: '#333', "borderRadius": "5px" }}>
        <CardTitle className="text-center text-secondary" color="secondary">Your Cart</CardTitle>
        <CardText>
          {camerasInCart[0] ?
            <ShoppingCartTable cameras={camerasInCart} />
            :
            <p className="text-center">
              Your cart is empty :-(
            </p>
          }
          <p>Subtotal: {subtotal ? `$${subtotal}` : "$0.00"}</p>
          <p>Tax (8.6%): {tax ? `$${tax}` : "$0.00"}</p>
          <p>Total: {total ? `$${total}` : "$0.00"}</p>
        </CardText>
        {props.checkoutPage ? null : <Button href="/checkout">Checkout</Button>}
      </Card>
      </div>
  )
}

const mapStateToProps = (state, props) => {
  return ({
    cameras: state.cameras
  })
}

export default connect(mapStateToProps, null)(ShoppingCart);
