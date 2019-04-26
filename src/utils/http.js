import {fetch as fetchfill} from 'whatwg-fetch';
import qs from "qs"
export const http = (method,url,data)=>{
    if(method === 'GET'){
        var str = '';
        for(let key in data){
            str+="&"+key+"="+data[key];
        }
        url = url+"?"+str.slice(1);
    
    return fetchfill(url)
            .then(res=>res.json())
    }else{
        return fetchfill(url,{
            method:'POST',
            body:qs.stringify(data)
        })
        .then(res=>res.json())
    }
}