const fs = require('fs/promises');
const path = require('path');
const { nanoid } = require('nanoid');

const contactsPath = path.join(__dirname, 'db', 'contacts.json');

// Читаємо всі контакти
const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

// Отримати конкретний контакт
const getContactById = async id => {
  const contactId = String(id);
  const contacts = await listContacts();
  const result = contacts.find(contact => contact.id === contactId);
  return result || null;
};

// Видаляємо контакт
const removeContactById = async id => {
  const contactId = String(id);
  const contacts = await listContacts();
  const index = contacts.findIndex(contact => contact.id === contactId);
  if (index == -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result;
};

// Оновлюємо контакт
const updateContactById = async (id, data) => {
  const contactId = String(id);
  const contacts = await listContacts();
  const index = contacts.findIndex(contact => contact.id === contactId);
  if (index == -1) {
    return null;
  }
  contacts[index] = { contactId, ...data };
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return contacts[index];
};

// Добавляємо rконтакт
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
  removeContactById,
  addContact,
};
