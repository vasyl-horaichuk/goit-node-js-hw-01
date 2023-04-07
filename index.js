const contacts = require('./contacts');
// const argv = require('yargs').argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
      break;

    case 'get':
      const getContacts = await contacts.getContactById(contactId);
      return console.log(getContacts);
      break;

    case 'add':
      // ... name email phone
      break;

    case 'remove':
      // ... id
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

invokeAction({ action: 'read' });
invokeAction({ action: 'get', id: 'qdggE76Jtbfd9eWJHrssH' });
// invokeAction(argv);
