import React from 'react';
import { Table } from 'reactstrap';
import FaTrash from 'react-icons/lib/fa/trash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeCameraFromCart } from '../actions/camera.actions';

const ShoppingCartTable = (props) => {

  let tableItems = props.cameras.map((camera, index) =>
    <tr key={index}>
      <td>{camera.title}</td>
      <td>${(camera.price).toFixed(2)}</td>
      <td className="trash-icon-wrapper" onClick={() => props.removeCameraFromCart(camera.id)}><FaTrash size={25}/></td>
    </tr>);

  return (
    <div>
      <Table hover size="sm" className="table-secondary">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {tableItems}
        </tbody>
      </Table>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ removeCameraFromCart: removeCameraFromCart}, dispatch)
}

export default connect(null, mapDispatchToProps) (ShoppingCartTable);
