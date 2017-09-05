import mongoose from 'mongoose';
import { Note, User } from '../models';

export default {
  /**
   * 新增或修改笔记
   * @param {Object} note 笔记信息
   * @param {Function} callback 
   */
  saveNote(note, callback) {
    note.updateAt = Date.now();
    if (!note._id) {
      note.createAt = note.updateAt;
      let a = new Note(note);
      a.save(callback);
    } else {
      Note.findOneAndUpdate({ _id: note._id }, note, callback);
    }
  },
  /**
   * 获取笔记列表
   * @param {String} userId 用户id
   * @param {Function} callback 
   */
  queryNoteList(userId, callback) {
    Note.find({ userId }).sort({ 'updateAt': -1 }).exec(callback);
  },
  /**
   * 查询单个笔记
   * @param {String} _id 笔记_id 
   * @param {Function} callback 
   */
  showNote(_id, callback) {
    Note.findOne({ _id }).lean().exec((noteErr, note) => {
      User.findOne({ _id: note.userId }).lean().exec((userErr, user) => {
        if (noteErr || userErr) {
          callback(null, { err: 'err' })
        }
        callback(null, Object.assign(note, user))
      })
    });
  },
  /**
   * 删除单个笔记
   * @param {String} _id 笔记_id
   * @param {any} callback 
   */
  delNote(_id, callback) {
    Note.remove({ _id }, callback);
  }
}
