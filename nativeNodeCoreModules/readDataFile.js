// NodeJs constants: module, require, __dirname, __filename, process

const fs = require('fs');
const path = require('path');

// see other native modules https://nodejs.org/dist/latest-v12.x/docs/api/
// examples http, crypto, os ...

fs.readFile(
  path.resolve(__dirname, 'data.txt'),
  'utf8',
  (error, data) => {
    if (error) {
      throw error;
    }
    else {
      console.log(
        data.split('\n')[0]
      );
    }
  }
);

fs.readdir(
  path.resolve(__dirname),
  (error, fileNames) => {
    if (error) {
      throw error;
    }
    else {
      console.log(fileNames);
    }
  }
);

console.log(process.cwd(), __dirname);
