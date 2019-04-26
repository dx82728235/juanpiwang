import React, { Component } from 'react'
import {connect} from 'react-redux';
import {mapStateToProps,mapDispatchToProps} from "@mapprops/home"
import {Header,Container} from "./styledComponents.js";
import {Icon} from "antd-mobile";
import Banner from "@components/home/banner";
import HomeNews from "@components/home/homenews"
import HomeGoods from "@components/home/goods"
class Home extends Component {
  render() {
    return (
      <Container>
     
        <Header>
          <div className="HeaderSearch">
            <Icon type="search" size="xxs"/>
            <img src="https://s1.juancdn.com/bao/170926/8/2/59ca3863a9fcf823cd42cfcb_84x60.png" alt=""/>
            <span>搜索</span>
          </div>
          <div className="HeaderIcon">
            <i className="iconfont iconfenlei"></i>
          </div>
        </Header>
        <Banner/>
        <HomeNews/>
        <HomeGoods/>
       
      </Container>
    )
  }
  componentDidMount(){
    this.props.getHome();
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
