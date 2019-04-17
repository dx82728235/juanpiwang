import styled from 'styled-components';

export const GoodContentCom = styled.div`
    width:100%;
    height:100%;
    padding: .16rem .14rem .16rem 0;
    display:flex;
    .good-img{
        width:1.5rem;
        margin-right:.12rem;
        img{
            width:100%;
        } 
    }
    .good-contents{
        width:100%;
        height:.9rem;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        .good-top{
            .good-name,.good-sty{
                font-size:.14rem;
            }
            .good-sty{
                margin-top:.06rem;
                color: #bbb;
            }
        }
        .good-price{
            font-size:.12rem;
            display:flex;
            justify-content:space-between;
            p{
                span{
                    color: #FF464E;
                    padding:.05rem;
                    margin-top:.1rem;
                    margin-right:.025rem;
                }
                del{
                    text-decoration: line-through;
                    color: #999999;
                }
            }
            .num{
                span{
                    font-size:.14rem;
                    color: #333;
                    padding: 0;
                    margin-top: 0;
                    margin-right: 0;
                }
            }
        }
    }
`