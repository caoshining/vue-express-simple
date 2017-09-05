import mongoose from 'mongoose';
import { User } from '../models';

export default {
  /**
   * 新增或修改用户
   * @param {Object} user 用户信息
   * @param {Function} callback
   */
  saveUser(name, callback) {
    User.findOneAndUpdate({ name }, {}, { upsert: true, new: true }, callback);
  },
}