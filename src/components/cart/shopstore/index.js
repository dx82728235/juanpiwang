import React, { Component } from 'react'
import {ShopStoreCom} from './styled'
import { Icon } from 'antd-mobile';
import {connect} from 'react-redux';
import {mapStateToProps,mapDispatchToProps} from "@mapprops/cart";

class ShopStore extends Component {
  render() {
    return (
      <ShopStoreCom>
        <span className="store-icon">
            <img src="http://s2.juancdn.com/bao/170615/2/d/594233d5a43d1f45d646cb90_72x72.png" />
        </span>
        <span className="store-name">她图女装旗舰店</span>
        <Icon type='right'/>
      </ShopStoreCom>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShopStore);