import styled from "styled-components";
export const HomeGoodsContainer = styled.div`
    width:100%;
    height:21.25rem;
    font-size:0.12rem;
    padding-bottom:2.5rem;
    .HomeGoodsItem{
        width:1.59rem;
        height:2.07rem;
        border:1px solid #ccc;
        float:left;
        position:relative;
        background:#fff;
        p:nth-child(1){
            width:1.59rem;
            height:1.59rem;
        }
        p:nth-child(2){
            font-size:0.13rem;
            color:#ff464e;
            font-weight:900;
            padding-left:0.07rem;
            margin-top:0.05rem;
        }
        p:nth-child(3){
            display:flex;
            justify-content: space-between;
            align-items: center;
            padding:0 0.07rem;
            margin-top:0.05rem;
            span{
                display:block;
                width:1.13rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                color:#3b3b3b;
                font-size:0.1rem;
            }
            em{
                font-style: normal;
                color:#bbb;
                font-size:0.09rem;
            }
        }
        p:nth-child(4){
            width:0.43rem;
            height:0.21rem;
            position:absolute;
            right:0.1rem;
            bottom:0.35rem;
        }
        p:nth-child(5){
            width:0.38rem;
            height:0.38rem;
            position:absolute;
            left:0;
            top:0;
        }
    }  
`