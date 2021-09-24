import * as actionType from './constants'
// 新增
export const addNote = (note) => {
    return (
        {
            type: actionType.ADD_NOTE,
            addNote: note
        }
    )
}
// 修改标题 & 删除文章 & 修改内容 & 收藏内容
export const changeNote = (note) => {
    return (
        {
            type: actionType.CHANGE_NOTE,
            changeNote: note
        }
    )
}