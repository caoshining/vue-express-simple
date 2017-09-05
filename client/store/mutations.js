import * as types from './mutation-types'

export default {
  [types.SET_USER](state, user) {
    state.user = user
  },
  [types.SET_NOTE_LIST](state, note) {
    if (note instanceof Array) {
      state.noteList = note
    } else {
      state.noteList.unshift(note)
    }
  },
  [types.SET_DELETE_NOTE](state, index) {
    state.noteList.splice(index, 1)
  }
}