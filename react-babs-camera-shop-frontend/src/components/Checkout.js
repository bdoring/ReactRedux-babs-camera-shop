import React from 'react';

import { Container, Row, Col, Button, Form } from 'reactstrap';

import ShoppingCart from './ShoppingCart';
import OrderDetailsForm from './OrderDetailsForm';

const Checkout = () => {

  return (
    <div>
      <Form>
        <Container>
          <h3> Your Order Details: </h3>
          <div style={{margin: "50px"}}>
            <Row>
              <Col sm="12" md="6">
                <OrderDetailsForm state={this.state}/>
              </Col>
              <Col sm="12" md="6">
                <ShoppingCart checkoutPage={true}/>
              </Col>
            </Row>
          </div>
          <Button type="submit" color="primary" size="lg">Place Order</Button>
        </Container>
      </Form>
    </div>
  )
}

export default Checkout;
