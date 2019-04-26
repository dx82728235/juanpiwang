import immutable from 'immutable';

const defaultState = immutable.fromJS({
    HomeBanner:[],
    HomeNews:[],
    HomeMock:[]
})

export default (state=defaultState,action)=>{
    switch(action.type){
        case "HOME_BANNER":
            return state.updateIn(["HomeBanner"],x=>x.concat(action.value));
        case "HOME_NEWS":
            return state.updateIn(["HomeNews"],x=>x.concat(action.value));
        case "HOME_MOCK":
            return state.updateIn(["HomeMock"],x=>x.concat(action.value));
        default:
            return state;
    }
    
}