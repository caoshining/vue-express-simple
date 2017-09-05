import express from 'express';
import note from './bl/note';
import user from './bl/user';
 
const router = express.Router();
// 新增或修改用户
router.get('/api/saveUser', user.saveUser);
// 新增或修改笔记
router.post('/api/saveNote', note.saveNote);
// 查询笔记列表
router.get('/api/queryNoteList', note.queryNoteList);
// 查询单个笔记
router.get('/api/showNote', note.showNote);
// 删除笔记
router.get('/api/delNote', note.delNote);
module.exports = router;
