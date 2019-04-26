import React, { Component } from 'react'
import {mapStateToProps,mapDispatchToProps} from "@mapprops/cart";
import {connect} from 'react-redux';
import { NavBar, Icon, List, Checkbox} from 'antd-mobile';
import ShopStore from '@components/cart/shopstore'
import GoodContent from '@components/cart/goodcontent'
import {CartCom} from './styled'

class Cart extends Component {
  onChange = (val) => {
    console.log(val);
  }
  render() {
    const CheckboxItem = Checkbox.CheckboxItem;
    let isEdit = this.props.isEdit;
    return (
      <CartCom>
        <div className="row">
          <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={ 
            <span style={{fontSize:".15rem"}} onClick={this.props.haneleIsEdit.bind(this,isEdit)}>{isEdit?'编辑':"完成"}</span>}
          style={{fontSize:".18rem",color:"#333",lineHeight:".44rem"}}
          >购物车</NavBar>
          <List className='mar'>
          <div className="storename">
            <CheckboxItem className="cart-check"/>
            <ShopStore/>
          </div>

            <div className='good-content'>
              <ul>
                <li className='goods'>
                  <CheckboxItem className="cart-check"/>
                  <GoodContent/>
                </li>
                <li className='goods'>
                  <CheckboxItem className="cart-check"/>
                  <GoodContent/>
                </li>
                <li className='goods'>
                  <CheckboxItem className="cart-check"/>
                  <GoodContent/>
                </li>
                <li className='goods'>
                  <CheckboxItem className="cart-check"/>
                  <GoodContent/>
                </li>
              </ul>
            </div>
          </List>
        </div>
    </CartCom>
    )
  }
  componentDidMount(){
    //getState 做测试用的 改成自己的
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);