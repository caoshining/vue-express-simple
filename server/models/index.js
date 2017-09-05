import mongoose from 'mongoose';
import config from '../config';
import user from './user';
import note from './note';

const _models = [
  user,
  note
];

const _export = {};

mongoose.connect(config.db, {server: {poolSize: 20}},
  err => {
    if (err) {
      console.error('connect to %s error: ', config.db, err.message);
      process.exit(1);
    }
});

mongoose.set('debug', config.mongoose_debug);

_models.map(model => {
  model.init();
  _export[model.name] = mongoose.model(model.name);
});

module.exports = _export;
