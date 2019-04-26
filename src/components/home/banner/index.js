import React,{Component} from "react";
import {connect} from "react-redux"
import {mapStateToProps,mapDispatchToProps} from "@mapprops/home"
import {BannerContainer} from "./styledComponents.js"
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
class Banner extends Component{
    render(){
        let HomeBanner = this.props.HomeBanner;
        return(
                <BannerContainer className="swiper-container banner-container" ref={banner=>this.banner=banner}>
                    <div className="swiper-wrapper">
                        { 
                            HomeBanner.map((item,key)=>(
                                <div className="swiper-slide" key={key}>
                                    <img src={item.touch_image_url} alt=""/>
                                </div>
                            ))
                        }
                    </div>
                    <div className="swiper-pagination banner-pagination"></div>
                </BannerContainer>
        )
    }
    componentDidUpdate(){
        if(!this.swiper){
            this.swiper = new Swiper(this.banner,{
                autoplay:{
                    disableOnInteraction:false,
                },
                loop:true,
                pagination:{
                    el:".banner-pagination",
                }
            })
        }   
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Banner);