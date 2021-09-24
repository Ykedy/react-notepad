import React, { memo, useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { changeNote as changeNoteAction } from '@/store/actionCreater'
import { TitleListWrapper, MaskWrapper, ChildTitleWrapper, NoWrapper } from './style'
import Write from '@/components/write'


export default memo(function TitleList(props) {
    const { starPage, title } = props;
    const allData = useSelector(state => state.notes, shallowEqual)
    let note = {}
    // 制作【收藏页面】的list
    let newarr = allData.filter((item) => item.isStar === 1)
    const [showNotestate, setShowNoteState] = useState({})
    // 设置【title】的状态【编辑】&【保存】
    // const [editeTitlestate, setEditeTitleState] = useState('block')
    const [SaveTitleState, setSaveTitleState] = useState('none')
    const [idState, setIdState] = useState(0)
    const [titleState, setTitleState] = useState('')
    // 无结果的时候
    const [noResult, setNoResult] = useState('none')
    // 修改标题后的值
    const inputRef = useRef('')
    const dispatch = useDispatch()
    // 选择是【收藏页面】还是【笔记本页面】
    const data = starPage ? newarr : allData

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

    // 点击每一项，显示详细内容
    const showDetail = (item) => {
        note = { ...item }
        setShowNoteState(note)
        setTitleState(item.title)

    }
    // 【编辑】=>【保存】
    const editeTitle = (id) => {
        setSaveTitleState('block')
        setIdState(id)

    }
    const saveTitle = () => {
        let oldarr = allData
        // setEditeTitleState('block')
        setSaveTitleState('none')
        let newTitle = inputRef.current.value
        //把数组对象变成一个数组  只要关键的那个值(要唯一值才行)，如id
        let idarr = oldarr.map(item => {
            return item.id
        })
        //得到要找的这个对象在原来的数组中的位置
        const index = idarr.indexOf(idState)
        // 如果没有改变，就不发生变化
        if (newTitle === '' || newTitle === oldarr[index].title) { return }
        else {
            // 修改
            oldarr[index].title = newTitle
            //  派发
            dispatch(changeNoteAction(oldarr))
            inputRef.current.value = ''
            setTitleState(oldarr[index].title)

        }
    }

    // 删除
    const deleteItem = (id) => {
        let oldarr = allData
        //把数组对象变成一个数组  只要关键的那个值(要唯一值才行)，如id
        let idarr = oldarr.map(item => {
            return item.id
        })
        //得到要找的这个对象在原来的数组中的位置
        const index = idarr.indexOf(id)
        //删除
        oldarr.splice(index, 1)
        dispatch(changeNoteAction(oldarr))
    }

    // 收藏
    const startItem = (id) => {
        let oldarr = allData
        let idarr = oldarr.map(item => { return item.id })
        const index = idarr.indexOf(id)
        oldarr[index].isStar = 1
        dispatch(changeNoteAction(oldarr))
    }
    // 取消收藏
    const delStartItem = (id) => {
        let oldarr = allData
        let idarr = oldarr.map(item => { return item.id })
        const index = idarr.indexOf(id)
        oldarr[index].isStar = 0
        dispatch(changeNoteAction(oldarr))
    }
    // 控制【没有页面】的显示与隐藏
    useEffect(() => {
        if (data[0] === undefined) {
            setNoResult('block')
        }
    }, [data])
    const selectNoPage = () => {
        if (starPage) {
            return (
                <i className="iconfont icon-meiyoushoucang"></i>
                )
            }
            else {
                return (
                <i className="iconfont icon-meiyougengduo"></i>
            )
        }
    }
    return (
        <>

            <MaskWrapper flagSave={SaveTitleState} >
                <div>
                    <input ref={inputRef} placeholder="输入标题" maxLength={28}></input>
                    <span className="iconfont icon-icon_finish_round" onClick={() => saveTitle()}>
                        <div className="savetitle">保存标题</div></span>
                </div>
            </MaskWrapper>

            <TitleListWrapper className="w360h100p" flagSave={SaveTitleState} >
                <div className="title">{title}</div>
                <ul>
                    {
                        data.map((item, index) => {
                            return (

                                <li className='item' key={item.id} onClick={() => showDetail(item)} >
                                    <div className="title">
                                        {item.title}
                                    </div>
                                    <i>{item.date}</i>
                                    <div className="functionbtn" >
                                        <div className="iconfont icon-icon_write" onClick={() => editeTitle(item.id)}>
                                            <div className="editetitle">编辑标题</div>
                                        </div>

                                        {selectStar(item.id, item.isStar)}
                                        <div className="iconfont icon-icon_delete" onClick={() => deleteItem(item.id)}>
                                            <div className="deletenote">删除笔记</div>
                                        </div>
                                    </div>

                                </li>
                            )
                        })
                    }
                </ul>
            </TitleListWrapper>
            <ChildTitleWrapper >
                <div className="childTitle">{titleState}</div>
                <Write data={showNotestate} />
            </ChildTitleWrapper>
            {/* 没有内容时显示的内容 */}
            <NoWrapper noResult={noResult}>
                {selectNoPage()}
                <div>什么也没有</div>
            </NoWrapper>

        </>
    )
})
