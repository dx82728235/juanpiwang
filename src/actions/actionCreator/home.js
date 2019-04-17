// name 改成自己需要用的名

export const name = ()=>{
    let action = (data)=>({
        type:name,
        value:data,
    })

    return async (dispatch)=>{
        let data = await name();
        console.log(data);
        dispatch(action(data));
    }
}