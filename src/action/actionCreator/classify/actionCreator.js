import {fetch as fetchfill} from "whatwg-fetch";

let url = "";

export const getDate = ()=>({
    type:"GET_DATA",
    payload:new Promise(resolve=>{
        fetchfill(url)
        .then(res=>res.json())
        .then(data=>{
            resolve(data);
        })
    })
})