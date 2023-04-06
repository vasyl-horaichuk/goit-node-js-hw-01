const fs = require('fs/promises');
const path = require('path');

const FilePath = path.join(__dirname, 'db', 'contacts.json');

const contactsPatch = fs
  .readFile(FilePath, 'utf-8')
  .then(date => console.log(date))
  .catch(err => console.error(err));

module.exports = contactsPatch;
