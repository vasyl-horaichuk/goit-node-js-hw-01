const fs = require('fs/promises');
const path = require('path');

const contactsPath = path.join(__dirname, 'db', 'contacts.json');

// Читаємо файл
function listContacts() {
  const data = fs
    .readFile(contactsPath, 'utf-8')
    .then(date => consol.log(date))
    .catch(err => console.error(err));
  return data;
}

// Отримати конкретний контакт
function getContactById(contactId) {
  const list = listContacts();
  const result = list.find(contact => contact.id === contactId);
  return result || null;
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}
module.exports = { listContacts, getContactById, removeContact, addContact };
