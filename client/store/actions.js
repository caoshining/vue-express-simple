import * as types from './mutation-types'

export default {
  saveUser({ commit }, user) {
    commit(types.SET_USER, user)
  },
  saveNoteList({ commit }, note) {
    commit(types.SET_NOTE_LIST, note)
  },
  deleteNote({ commit }, index) {
    commit(types.SET_DELETE_NOTE, index)
  }
}