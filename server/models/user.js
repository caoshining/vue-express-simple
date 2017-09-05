import mongoose from 'mongoose';

export default {
  name: 'User',
  init() {
    const schema = new mongoose.Schema({
      // 姓名
      name: String,
      // 创建时间
      createAt: { type: Date, default: Date.now }
    });
    mongoose.model(this.name, schema, 'user');
  }
}
