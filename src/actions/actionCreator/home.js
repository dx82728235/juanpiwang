import {action} from '@actions'
import {HomeBanner,HomeNews,HomeMock} from "@apis/home.js"
export const getHomeBannerAction = ()=>{
    return async (dispatch)=>{
        let data =await HomeBanner();
        dispatch(action("HOME_BANNER",data.data.silde_list));
    }
}
export const getHomeNewsAction = ()=>{
    return async (dispatch)=>{
        let data =await HomeNews();
        dispatch(action("HOME_NEWS",data.data.classify_list.slice(0,4)));
    }
}

export const getMockAction = ()=>{
    return async (dispatch)=>{
        let data =await HomeMock();
        dispatch(action("HOME_MOCK",data));
    }
}