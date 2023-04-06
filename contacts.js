const fs = require('fs/promises');
const path = require('path');

const contactsPath = path.join(__dirname, 'db', 'contacts.json');

// Читаємо файл
const listContacts = async () => {
  const data = await fs.readFile(contactsPath, 'utf-8');
  return JSON.parse(data);
};

// Отримати конкретний контакт
const getContactById = async contactId => {
  const list = await listContacts();
  const result = list.find(item => item.id === contactId);
  return result || null;
};

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}
module.exports = { listContacts, getContactById, removeContact, addContact };
