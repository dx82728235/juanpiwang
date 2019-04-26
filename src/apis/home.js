import {http} from '@/utils/http'
export const HomeBanner = ()=>http("GET","/home/getSildeList?abbreviation=&limit=")
export const HomeNews = ()=>http("GET","/home/getClassifyItem?city_id=0&operation_limit=5")
export const HomeMock = ()=>http("GET","/goods/goodsInfo");