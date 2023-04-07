const fs = require('fs/promises');
const path = require('path');

const contactsPath = path.join(__dirname, 'db', 'contacts.json');

// Читаємо файл
const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return consoleJSON.parse(data);
};

// Отримати конкретний контакт
const getContactById = async contactId => {
  const contacts = await listContacts();
  const result = contacts.find(contact => contact.id === contactId);
  return result || null;
};

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}
module.exports = { listContacts, getContactById, removeContact, addContact };
