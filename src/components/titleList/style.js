import styled from "styled-components";

export const TitleListWrapper = styled.div`
    background-color: whitesmoke;
  
        .title {

            font-size:26px;
            color:#737373;
            margin:20px;
            margin-right:opx;
        }
        
    ul {
        overflow-y:scroll;
        height:calc(100vh - 69.9px);
    }
    .item {
        position: relative;
        border-top: 1px solid #c2c2c2;
        height: 60px;
        padding:12px 80px 6px 24px;
        cursor: pointer;
        /* 笔记题目 */
        .title{
            width:200px;
            font-size:18px;
            white-space:nowrap;
            overflow:hidden;
            text-overflow: ellipsis;
            margin: 0;
        }
        
        /* 日期 */
        i {
            display:block;
            margin-top:20px;
            margin-left:130px;
            color:gray;
        }
    }

    .item:hover {
        background-color:#c2c2c2;
        color:white;

        .title, i {
            color:white;
        }
    }
    /* 点击后变色 */
    .focusItem{
        background-color: #c2c2c2;
    }
    .functionbtn {
        position:absolute;
        display:none;
        top:24px;
        right:30px;
        /* 收藏按钮 */
        .icon-shoucang,.icon-quxiaoshoucang,.icon-icon_write{
            margin-right:4px;
        }
        
        .iconfont {
            z-index:999;
            font-size:24px;
            text-align:center;
            /* 提示删除和收藏 */
            .star,.unstar,.deletenote,.editetitle {
                display:none;
                margin-top:5px;
                position: absolute;
                font-size:12px;
                background-color: gray;
                padding:2px;
            }
            .star::before{
                left:10px;
            }
            .unstar::before{
                left:20px;
            }
            .editetitle::before{
                left:20px;
            }
            .deletenote::before{
                left:21px;
            }
            .star::before,.unstar::before,.deletenote::before,.editetitle::before{
                content:'';
                position:absolute;
                top:-6px;
                width: 0;
                height: 0;
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
                border-bottom:7px solid gray;
            }
            .star {
                width:26px;
                left:24px
            }
            .unstar{
                width:50px;
                left:14px;
            }
            .editetitle{
                width:50px;
                left:-14px;
            }
            .deletenote {
                width:60px;
                left:40px;
            }
        }
        /* 收藏和删除路过时，变色 */
        .iconfont:hover {
            color:#fa8a00;
            .star,.deletenote,.unstar ,.editetitle{
                color:white;
            }
        }
        .icon-shoucang:hover .star,
        .icon-quxiaoshoucang:hover .unstar,
        .icon-icon_delete:hover .deletenote,
        .icon-icon_write:hover .editetitle
        {
            display:block;
        }
        
    }
    
    .item:hover .functionbtn {
        display:float;
    }
    `


export const MaskWrapper = styled.div`
    /* 遮罩 */
    display:${props => props.flagSave};
    width: 100%;
    height: 100%;
    position:absolute;
    z-index:1000;
    div{
        position:absolute;
        left:180px;
        top:14px;
        display:flex;
        align-items:center;
        
    }
    input{
        background-color:transparent;
        width:180px;
        height: 40px;
    }
    span{
        margin-left:4px;
        background-color:transparent;
        font-size:20px;
    }
    span:hover{
        color:gray;
    }
    span:hover .savetitle{
        display:block;
    }

    .savetitle {
        display:none;
        color:white;
        margin-top:24px;
        position: absolute;
        font-size:12px;
        background-color: gray;
        padding:2px;
        width:50px;
        left:168px;
    }
    .savetitle:before{
        left:21px;
        content:'';
        position:absolute;
        top:-6px;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom:7px solid gray;
    }
    `
export const ChildTitleWrapper = styled.div`
display:flex;
flex-direction:column;
.childTitle{
    height: 40px;
    text-align:center;
    font-size:30px;
    font-weight:500;
    line-height:40px;
    margin-top:8px;
}

`

export const NoWrapper = styled.div`
    display:${props => props.noResult};
    position:absolute;
    left: 160px;
    top: 180px;
    text-align:center;
    i {
        font-size:160px;
        color: #f9b259;

    }

    div{
        color:#f9b259;
    }
`