const contacts = require('./contacts');
const { hideBin } = require('yargs/helpers');

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'read':
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);

    case 'get':
      const getContacts = await contacts.getContactById(id);
      return console.log(getContacts);

    case 'add':
      const newContacts = await contacts.addContact(name, email, phone);
      return console.log(newContacts);

    case 'update':
      const updateContacts = await contacts.updateContactById(id, {
        name,
        email,
        phone,
      });
      return console.log(updateContacts);

    case 'remove':
      const removeContacts = await contacts.removeContactById(id);
      return console.log(removeContacts);

    default:
      return console.log('Unknown action type!');
  }
};

// const actionIndex = process.argv.indexOf('--action');
// if (actionIndex !== -1) {
//   const action = process.argv[actionIndex + 1];
//   const id = process.argv[actionIndex + 2];
//   const name = process.argv[actionIndex + 3];
//   const email = process.argv[actionIndex + 4];
//   const phone = process.argv[actionIndex + 5];
//   invokeAction({ action, id, name, email, phone });
// }

// const actionIndex = process.argv.indexOf('--action');
// console.log(actionIndex);
console.log(process.argv);
console.log(process.argv.index('--action'));
console.log(process.argv.index('index'));
console.log(process.argv.index('get'));
