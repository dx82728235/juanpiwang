import {testDates} from '@actions/actionTypes/cart'
import {name} from '@apis/cart'
import {action} from '@actions'

export const testDateAction = ()=>{
    return async (dispatch)=>{
        let data = await name();
        console.log(data);
        dispatch(action(testDates,data));
    }
}