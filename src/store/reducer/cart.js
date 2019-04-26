import immutable from 'immutable';
import {cartIsEditAction} from '@actions/actionTypes/cart'

const defaultState = immutable.fromJS({
    isEdit:true,
})

export default (state=defaultState,action)=>{
    switch(action.type){
        case cartIsEditAction:
            let flag = state.getIn(['isEdit'])?false:true;
            return state.updateIn(['isEdit'],x=>flag);


        default:
            return state;
    }
}