const contacts = require('./contacts');
// const argv = require('yargs').argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'read':
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);

    case 'getContactById':
      const getContacts = await contacts.getContactById(id);
      return console.log(getContacts);

    case 'add':
    // ... name email phone
    //   break;

    case 'remove':
    // ... id
    //   break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

invokeAction({ action: 'read' });
invokeAction({ action: 'getContactById', id: 'qdggE76Jtbfd9eWJHrssH' });
// invokeAction(argv);
