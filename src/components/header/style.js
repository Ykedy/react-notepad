import styled from "styled-components"

export const HeaderWrapper = styled.div`
    height:100vh;
    width:73px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    background-color: #c2c2c2;

    .btn {
        position:relative;
        width:38px;
        height: 38px;
        font-size:30px;
        text-align:center;
        line-height:38px;
        background-color: #fff;
        border-color:#e9e9e9;
        border-radius:50%;
        cursor:pointer;
    }
    .btn:nth-child(5){
        text-align:left;
    }

    .active {
        background-color:#f9b259;
        color:white;
    }
    .btn:hover{
         background-color:#f9e459;
        color:white;
    }
/* 文字提示 */
    
    .tip {
        display:none;
        z-index:99;
        position:absolute;
        left:50px;
        top:9px;
        background-color:gray;
        color:white;
        line-height:20px;
        font-size:12px;
        width: 60px;
        height: 20px;
        border-radius:4px;
        
    }
    .tip:before{
        content:'';
        position:absolute;
        left:-9px;
        top:4px;

        width: 0;
        height: 0;
        border-top: 5px solid transparent;
        border-right: 10px solid gray;
        border-bottom: 5px solid transparent;

    }
    .btn:hover .tip {
        display:inline-block;
    }
`