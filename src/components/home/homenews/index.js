import React,{Component} from "react";
import {connect} from "react-redux"
import {mapStateToProps,mapDispatchToProps} from "@mapprops/home"
import {HomeNewsContainer} from "./styledComponents.js"
class HomeNews extends Component{
    render(){
        let HomeNews = this.props.HomeNews;
        return(
            <HomeNewsContainer>
                <ul>
                    {
                        HomeNews.map((item,index)=>(
                        <li key={index}>
                            <a href="##">
                                <img src={item.pic} alt=""/>
                            </a>
                        </li>
                        ))
                    }
                </ul>
            </HomeNewsContainer>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HomeNews)
