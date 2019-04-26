import data from "../mock";
import Mock from "mockjs";
Mock.mock(/goods\/goodsInfo/,"get",()=>{
    return data;
    //回调中如果是post请求可以在回调中读取body传递过来的数据
});//当访问'/goods/goodsInfo'接口时请求到模拟出来的数据