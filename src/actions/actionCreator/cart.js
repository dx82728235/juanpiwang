import {cartIsEditAction} from '@actions/actionTypes/cart'
import {name} from '@apis/cart'
import {action} from '@actions'

export const testDateAction = ()=>{
    return async (dispatch)=>{
        let data = await name();
        console.log(data);
        dispatch(action(data));
    }
}

export const isEditAction = ()=>(dispatch)=>{
    return dispatch(action(cartIsEditAction))
}