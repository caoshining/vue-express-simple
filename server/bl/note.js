import noteDal from '../dal/noteDal';

export default {
  // 新增或修改笔记
  saveNote(req, res, next) {
    let note = req.body;
    noteDal.saveNote(note, (err, data) => {
      if (err) {
        return next(data);
      }
      res.setHeader('Cache-Control', 'no-cache');
      res.json(data);
    })
  },
  // 查询笔记列表
  queryNoteList(req, res, next) {
    let { id } = req.query;
    noteDal.queryNoteList(id, (err, data) => { 
      if (err) { 
        return next(err);
      }
      res.setHeader('Cache-Control', 'no-cache');
      res.json(data);
    })
  },
  // 查询单个笔记
  showNote(req, res, next) { 
    let { id } = req.query;
    noteDal.showNote(id, (err, data) => { 
      if (err) { 
        return next(err)
      }
      res.setHeader('Cache-Control', 'no-cache');
      res.json(data);
    })
  },
  // 删除笔记
  delNote(req, res, next) { 
    let { id } = req.query;
    noteDal.delNote(id, (err, data) => { 
      if (err) { 
        return next(err);
      }
      res.setHeader('Cache-Control', 'no-cache');
      res.json(data);
    })
  }
}