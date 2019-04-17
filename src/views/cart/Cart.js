import React, { Component } from 'react'
import {mapStateToProps,mapDispatchToProps} from "@mapprops/cart";
import {connect} from 'react-redux';

class Cart extends Component {
  render() {
    return (
      <div>
        cart
      </div>
    )
  }
  componentDidMount(){
    //getState 做测试用的 改成自己的
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);