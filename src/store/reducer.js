import * as actionType from './constants'
const defaultState = {
    notes: [],
}

function reducer(state = defaultState, action) {
    switch (action.type) {
        // 新增文章
        case actionType.ADD_NOTE:
            return { ...state, notes: [...state.notes, action.addNote] }
        // 修改&删除&star
        case actionType.CHANGE_NOTE:
            return { ...state, notes: action.changeNote}
        default:
            return state;
    }
}

export default reducer