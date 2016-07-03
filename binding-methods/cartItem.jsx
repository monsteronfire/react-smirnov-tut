import React from 'react';

export default class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: props.initialQty,
      total: 0
    };
  }

  componentWillMount(){
    this.recalculateTotal();
  }

  increaseQty() {
    this.setState({qty: this});
  }
}
