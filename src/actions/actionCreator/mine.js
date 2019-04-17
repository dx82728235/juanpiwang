// name 改成自己需要用的名

import {action} from '@actions'

export const testDateAction = ()=>{
    return async (dispatch)=>{
        let data = await name();
        console.log(data);
        dispatch(action());
    }
}