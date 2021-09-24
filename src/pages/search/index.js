import React, { memo, useState, useRef } from 'react'
import { useDispatch,shallowEqual, useSelector } from 'react-redux'
import { SearchWrapper, ChildTitleWrapper, NoResultWrapper } from './style'
import { changeNote as changeNoteAction } from '@/store/actionCreater'
import Write from '@/components/write'
export default memo(function Search() {
    const notes = useSelector(state => state.notes,shallowEqual)
    const [data, setData] = useState([])
    const [noResult, setNoResult] = useState('none')
    const [titleState, setTitleState] = useState('')
    const dispatch = useDispatch()
    
    let note = {
        title: '',
        content: '',
        date: '',
        isStar: 0,
    }
    const [showNotestate, setShowNoteState] = useState(note)
    const inputRef = useRef('')
    const delAll = () => {
        // 点击x号，清空input内所有内容
        inputRef.current.value = ''
    }
    // 搜索功能
    const search = () => {
        setNoResult('none')
        setData([])
        const separator = '.*?'
        let value = inputRef.current.value
        if (value === '') {
            return
        }
        else {
            let arr = value.split('')
            let data = arr.join(separator)
            var re = new RegExp(data);
            let result = notes.map((item) => {
                let it = {}
                if (re.test(item.title) || re.test(item.content)) {
                    it = item
                }else{
                    it = false
                }
                return it
            })
            result = result.filter((item) => {
                let it = {}
                if (item) {
                    it = item
                } else {
                    it = false
                }
                return it
            })
            if (result[0] === undefined) {
                setNoResult('block')
            }
            else {
                setData(result)
            }
        }
    }

    // 点击每一项，显示详细内容
    const showDetail = (item) => {
        note = { ...item }
        setShowNoteState(note)
        setTitleState(item.title)

    }
    // 选择是【收藏】还是【取消收藏】
    const selectStar = (id, isStar) => {

        // 如果收藏了，显示取消收藏icon
        if (isStar === 1) {
            return (
                <div className="iconfont icon-quxiaoshoucang" onClick={() => delStartItem(id)}>
                    <div className="unstar">取消收藏</div>
                </div>
            )
        }
        // 如果没收藏，显示收藏icon
        else {

            return (
                <div className="iconfont icon-shoucang" onClick={() => startItem(id)}>
                    <div className="star">收藏</div>
                </div>
            )
        }


    }

    // 收藏
    const startItem = (id) => {
        let oldarr = notes
        let idarr = oldarr.map(item => { return item.id })
        const index = idarr.indexOf(id)
        if (index === -1) {
            return
        } else {
            oldarr[index].isStar = 1
            dispatch(changeNoteAction(oldarr))
        }
        
    }
    // 取消收藏
    const delStartItem = (id) => {
        let oldarr = notes
        let idarr = oldarr.map(item => { return item.id })
        const index = idarr.indexOf(id)
        if (index === -1) {
            return
        } else {
            oldarr[index].isStar = 0
            dispatch(changeNoteAction(oldarr))
        }
        
    }

    // 删除
    const deleteItem = (id,item) => {
        let oldarr = notes
        //把数组对象变成一个数组  只要关键的那个值(要唯一值才行)，如id
        let idarr = oldarr.map(item => {
            return item.id
        })
        //得到要找的这个对象在原来的数组中的位置
        const index = idarr.indexOf(id)
        if(index === -1){
            return
        }else{
            //删除
            oldarr.splice(index, 1)
            dispatch(changeNoteAction(oldarr))
        }

    }

    return (
        <>
            <SearchWrapper className="w360h100p">
                {/* 搜索框 */}
                <div className="searchbox">
                    <input placeholder="搜索..." ref={inputRef} autoFocus='autofocus' maxLength={16}></input>
                    <span className="iconfont icon-icon_close_ungrand del" onClick={() => delAll()}></span>
                    <span className="iconfont icon-sousuo searchicon" onClick={() => search()}></span>


                </div>
                {/* 结果区 */}

                <ul>
                    {
                        data.map((item, index) => {
                            return (
                                <li className="item" key={item.id} onClick={() => showDetail(item)}>
                                    <div className="title">
                                        {item.title}
                                    </div>
                                    <i>{item.time}</i>
                                    <div className="functionbtn" >
                                        {selectStar(item.id, item.isStar)}
                                        <div className="iconfont icon-icon_delete" onClick={() => deleteItem(item.id,item)}>
                                            <div className="deletenote">删除笔记</div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </SearchWrapper>
            <ChildTitleWrapper >
                <div className="childTitle">{titleState}</div>
                <Write data={showNotestate} />
            </ChildTitleWrapper>
            <NoResultWrapper noResult={noResult}>
                <i className="iconfont icon-meiyoushuju"></i>
                <div>什么也没有</div>
            </NoResultWrapper>
        </>
    )
})
