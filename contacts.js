const fs = require('fs/promises');
const path = require('path');
const { nanoid } = require('nanoid');

const contactsPath = path.join(__dirname, 'db', 'contacts.json');

// Читаємо файл
const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

// Отримати конкретний контакт
const getContactById = async id => {
  const contacts = await listContacts();
  const result = contacts.find(contact => contact.id === id);
  return result || null;
};

// Видаляємо контакт
const removeContact = async contactId => {
  const contacts = await listContacts();
};

// Оновлюємо контакт
const updateContactById = async (id, data) => {
  const contacts = await listContacts();
  const index = contacts.findIndex(contact => contact.id === id);
  if (index !== -1) {
    return null;
  }
  contacts[index] = { id, ...data };
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return contacts[index];
};

// Добавляємо файл
const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(8),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};
module.exports = {
  listContacts,
  getContactById,
  updateContactById,
  removeContact,
  addContact,
};
