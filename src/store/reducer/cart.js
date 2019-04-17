import immutable from 'immutable';
import {testDates} from '@actions/actionTypes/cart'

const defaultState = immutable.fromJS({
    test:[]
})

export default (state=defaultState,action)=>{
    switch(action.type){
        case testDates:
            return state.updateIn(['test'],x=>x.concat(action.value));


        default:
            return state;
    }
}