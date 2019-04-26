import React,{Component} from "react";
import {connect} from "react-redux"
import {mapStateToProps,mapDispatchToProps} from "@mapprops/home"
import {HomeGoodsContainer} from "./styledComponents.js"
import immutable from "immutable";
class HomeGoods extends Component{
    render(){
        let HomeMock = this.props.HomeMock;
        console.log(HomeMock)
        return(
            <HomeGoodsContainer>
               {
                   HomeMock.map((item)=>(               
                        immutable.List(item.data).map((item1,index1)=>(//将普通数组转化为immutable对象                         
                            <div className="HomeGoodsItem" key={index1}>
                                <p style={{background:item1.color1}}></p>
                                <p>{item1.goodsTitle}</p>
                                <p><span>{item1.goodsDes}</span><em>剩{item1.goodsCount}天</em></p>
                                <p style={{background:item1.color2}}></p>
                                <p style={{background:item1.color3}}></p>
                            </div>
                        ))                       
                   ))
               }
            </HomeGoodsContainer>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HomeGoods)