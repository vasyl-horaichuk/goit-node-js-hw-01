const fs = require('fs/promises');
const path = require('path');

const FilePath = path.join(__dirname, './db');

const contactsPatch = fs
  .readFile(FilePath)
  .then(date => console.log(date.toString()))
  .catch(err => console.error);

module.exports = contactsPatch;
