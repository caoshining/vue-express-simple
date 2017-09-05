import mongoose from 'mongoose';

export default {
  name: 'Note',
  init() {
    const schema = new mongoose.Schema({
      // 用户id
      userId: String,
      // 标题
      title: String,
      // 内容
      content: String,
      // 创建时间
      createAt: Number,
      // 修改时间
      updateAt: Number
    });

    mongoose.model(this.name, schema, 'note');
  }
}
