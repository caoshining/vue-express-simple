import getmac from 'getmac';
import userDal from '../dal/userDal';

export default {
  // 新增或修改用户
  saveUser(req, res, next) {
    let { name } = req.query;
    userDal.saveUser(name, (err, data) => {
      if (err) {
        return next(err);
      }
      res.setHeader('Cache-Control', 'no-cache');
      res.json(data);
    })
  }
}