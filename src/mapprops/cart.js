//textData  做测试用的 改成自己的
import {isEditAction} from '@actions/actionCreator/cart'

export const mapStateToProps = (state)=>({
    isEdit:state.getIn(["Cart",'isEdit']),
})

export const mapDispatchToProps = (dispatch)=>({
    haneleIsEdit(){    
        dispatch(isEditAction())
    }
})