import styled from "styled-components";
export const WriteBarWrapper = styled.div`
    .title{
        height: 40px;
        text-align:center;
        font-size:30px;
        font-weight:500;
        line-height:40px;
        margin-top:8px;
        margin-left:10px;

    }
    .btn {
        position:absolute;
        background-color:red;
        right: 0;
        top: 0;
    }

    .bf-container{
        height:calc(100vh - 60px - 20px);
        overflow:hidden;
    }
    .article p{
    min-height: 1em;
    }
    .save{
        position:absolute;
        top:50%;
        left:50%;
        width: 500px;
        height: 50px;
        background-color:yellow;
        .title{
            width: 100%;
            height: 100%;
        }
    }
`