const fs = require('fs/promises');
const path = require('path');

const contactsPath = path.join(__dirname, 'db', 'contacts.json');

// Читаємо файл
function listContacts() {
  fs.readFile(contactsPath, 'utf-8')
    .then(date => console.log(date))
    .catch(err => console.error(err));
}

// Отримати конкретний контакт
function getContactById(contactId) {
  listContacts().map();
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}
module.exports = { listContacts, getContactById, removeContact, addContact };
