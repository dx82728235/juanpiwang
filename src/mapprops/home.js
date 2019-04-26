import {getHomeBannerAction,getHomeNewsAction,getMockAction} from "@actions/actionCreator/home.js";
export const mapStateToProps = (state)=>({
   HomeBanner:state.getIn(["Home","HomeBanner"]),
   HomeNews:state.getIn(["Home","HomeNews"]),
   HomeMock:state.getIn(["Home","HomeMock"])
})

export const mapDispatchToProps = (dispatch)=>({
   getHome(){
    dispatch(getHomeBannerAction());
    dispatch(getHomeNewsAction());
    dispatch(getMockAction());
   }
})