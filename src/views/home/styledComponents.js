import styled from "styled-components";
export const Container = styled.div`
    width:100%;
    height:100%;
    overflow:auto;
`
export const Header = styled.div`
    width:100%;
    height:0.37rem;
    background:#fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.12rem;
    padding:0 0.1rem;
    .HeaderSearch{
        width:2.7rem;
        height:0.24rem;
        background: #eee;
        border-radius: 5px;
        color:rgb(153, 153, 153);
        display: flex;
        align-items: center;
        padding-left:0.05rem;
        img{
            width:0.18rem;
            height:0.13rem;
            margin:0 0.05rem;
        }
    }
`
