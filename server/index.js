import config from './config';
import express from 'express';
import chalk from 'chalk';
import path from 'path';
import favicon from 'serve-favicon';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import router from './router';

mongoose.connect(config.db, { useMongoClient: true });
mongoose.Promise = global.Promise;

const app = express();
const port = process.env.PORT || config.port;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(favicon(path.join(__dirname, 'favicon.ico')));

app.use(express.static('dist'));
app.use('/', router);

app.listen(port, () => {
  console.log(chalk.blue(`${config.name} listening on port ${port}`))
});

module.exports = app