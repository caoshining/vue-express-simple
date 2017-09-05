require('babel-register')({
  plugins: ['transform-runtime'],
  presets: ['es2015', 'stage-0', 'stage-1'],
});

require('./server');