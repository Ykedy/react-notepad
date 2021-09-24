import styled from "styled-components";
export const WriteBarWrapper = styled.div`
    .title{
        height: 40px;
        width:calc(100vw  - 100px);
        text-align:center;
        font-size:30px;
        font-weight:500;
        line-height:40px;
        margin-top:8px;
        margin-left:10px;

    }
    .bf-container{
        height:calc(100vh - 60px - 20px);
    }
    .article p{
    min-height: 1em;
    }

    .saved{
        display:${props => props.showSave};
        position:absolute;
        left: 50%;
        top:50%;
        background-color:gray;
        color:white;
        padding:6px;
        border-radius:4px;
    }
`

export const SaveWrapper = styled.div`
    position:absolute;
    background-color: red;
    right: 14%;
    top:5%;
    cursor: pointer;

    .iconfont {
        position:absolute;
        font-size:26px;
        
        div{
            display:none;
            position:absolute;
            left:-5px;
            bottom:-22px;
            padding:2px;
            background-color: gray;
            width:34px;
            font-size:12px;
            text-align:center;
            color:white;
        }
        div:before{
            content:'';
            position:absolute;
            top: -6px;
            left: 14px;
            width:0;
            height: 0;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-bottom:7px solid gray;
            
        }
    }
    .iconfont:hover div{
        display:block;
    }
    .iconfont:hover{
        color:#fa8a00;
    }
`