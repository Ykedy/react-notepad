import React, { memo, useRef } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
// 引入编辑器组件
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'
import { WriteBarWrapper } from './style'
import {
    getDate,
} from '@/utl/tools'
import { changeNote as changeNoteAction } from '@/store/actionCreater'
export default memo(function Write(props) {
    let { content, id } = props.data || ''
    const areaRef = useRef()
    const dispatch = useDispatch()
    const allNotes = useSelector(state => state.notes, shallowEqual)
    const excludeControls = ['media', 'link', 'text-indent', 'headings', 'superscript', 'fullscreen', 'subscript', 'clear', 'remove-styles']
    const htmlString = content;
    const editorState1 = BraftEditor.createEditorState(htmlString)

    //保存
    const submitContent = () => {
        // 在编辑器获得焦点时按下ctrl+s会执行此方法
        let contentValue = areaRef.current.getValue()
        contentValue = contentValue.toHTML()
        // 修改内容：找到id、content、日期，进行更新
        let idarr = allNotes.map((item) => {
            return item.id
        })
        let index = idarr.indexOf(id)
        allNotes[index].content = contentValue
        allNotes[index].date = getDate()

    
    dispatch(changeNoteAction(allNotes))
}

   
        
       
        
    

    return (
    <WriteBarWrapper >
        {/* <h2 className="title" >{title}</h2> */}
        <BraftEditor value={editorState1}
            ref={areaRef}
            excludeControls={excludeControls}
            contentStyle={{ height: 'calc(100vh - 60px - 48px)', width: 'calc(100vw - 360px - 73px)', boxShadow: 'inset 0 1px 3px rgba(0,0,0,.1)' }}
            onSave={submitContent}
            id="editor-with-code-highlighter"
        />
    </WriteBarWrapper>


)
})



