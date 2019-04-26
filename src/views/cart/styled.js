import styled from 'styled-components'

export const CartCom = styled.div`
    position:relative;
    overflow:auto;
    height:100%;
    .row{
        position:absolute;
        height:max-content;
    }
    .mar{
        margin-bottom:.1rem;
    }
    .storename{
        display:flex;
        align-items:center;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
    }
    .good-content{
        height:100%;
        ul,li{
            width:100%;
            background:#fff;
        }
        ul>.goods{
            display:flex;
            align-items:center;
            height:100%;
        }
    }
    .cart-check{
        width:.5rem;
    }
    .am-checkbox-inner{
        border:1px solid #9b9b9b;
        left: .17rem !important;
        top: .1rem !important;
    }
`