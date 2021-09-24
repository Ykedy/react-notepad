import React from 'react'
// 引入编辑器组件
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'
import 'braft-extensions/dist/code-highlighter.css'
import { WriteBarWrapper, SaveWrapper } from './style'
import {
    getDate,
    dataFrom,
} from '@/utl/tools'
import { addNote } from '@/store/actionCreater'
import store from '@/store'
export default class WriteBar extends React.Component {

    state = {
        editorState: BraftEditor.createEditorState('<p></p>'),
        showSave: 'none'
    }
    excludeControls = ['media', 'link', 'text-indent', 'emoji', 'headings', 'superscript', 'fullscreen', 'subscript', 'clear', 'remove-styles']
    // 节流阀，防止定时器同时间开多个
    flag = 0
    // 编辑内容触发
    handleChange = (editorState) => {
        this.setState({ editorState })
    }


    //保存
    submitContent = () => {
        // 在编辑器获得焦点时按下ctrl+s会执行此方法
        if (this.flag === 0) {

            this.flag = 1;
            // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
            const htmlContent = this.state.editorState.toHTML()
            let title = this.titleRef.value
            if (title === '') {
                title = '未命名标题'
                this.titleRef.value = title
            }
            const data = dataFrom(title, htmlContent, getDate())
            store.dispatch(addNote(data))
            this.setState({ showSave: 'block' })
            setTimeout(() => {
                this.setState({ showSave: 'none' })
                this.flag = 0
            }, 1500)
        }

    }
    componentWillUnmount = () => {
        this.setState = (state, callback) => {
            return;
        };
    }



    render() {
        return (
            <>
                <SaveWrapper onClick={this.submitContent}>
                    <i className="iconfont icon-icon_rule"><div>保存</div></i>
                    
                </SaveWrapper>
                <WriteBarWrapper showSave={this.state.showSave}>
                    <input placeholder="输入标题" className="title" ref={e => this.titleRef = e} autoFocus="autofocus" maxLength={28} ></input>
                    <BraftEditor value={this.state.editorState}
                        onChange={this.handleChange}
                        excludeControls={this.excludeControls}
                        contentStyle={{ height: 'calc(100vh - 60px - 48px)', width: 'calc(100vw  - 80px)', boxShadow: 'inset 0 1px 3px rgba(0,0,0,.1)' }}
                        id="editor-with-code-highlighter"
                        onSave={this.submitContent}
                    />
                    <div className="saved iconfont icon-icon_finish_round" >已保存</div>
                </WriteBarWrapper>
            </>

        )
    }



}
