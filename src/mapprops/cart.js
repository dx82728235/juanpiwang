//textData  做测试用的 改成自己的
import {testDateAction} from '@actions/actionCreator/cart'

export const mapStateToProps = (state)=>({
    test:state.getIn(['Cart','test'])
})

export const mapDispatchToProps = (dispatch)=>({
    //getState  做测试用的 改成自己的
    getState(){
        dispatch(testDateAction())
    }
})