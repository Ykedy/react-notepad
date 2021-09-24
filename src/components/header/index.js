import React, { memo } from 'react'
import {NavLink} from 'react-router-dom'
import {
    HeaderWrapper
} from './style'

export default memo(function Header() {
    return (
        <HeaderWrapper>
            <NavLink to="/addnote" className="btn iconfont icon-icon_plus">
                <span className="tip">新建笔记</span>
                </NavLink>
            <NavLink to="/search" className="btn iconfont icon-icon_search">
                <span className="tip">搜索</span>
                </NavLink>
            <NavLink to="/notes" className="btn iconfont icon-xuexi">
                <span className="tip">笔记本</span>
                </NavLink>
            <NavLink to="/collection" className="btn iconfont icon-biaoqian">
                <span className="tip">收藏</span>
                </NavLink> 
        </HeaderWrapper> 
    )
})
