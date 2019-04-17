import {testDates} from '@actions/actionTypes/cart'
import {name} from '@apis/cart'

export const testDateAction = ()=>{
    let action = (data)=>({
        type:testDates,
        value:data,
    })

    return async (dispatch)=>{
        let data = await name();
        console.log(data);
        dispatch(action(data));
    }
}