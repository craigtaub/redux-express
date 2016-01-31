require('babel-register');

require('./server/server');
// NEED to require in before can transform as starts on first 'require'
// NEED .babelrc with presets:es2015
