// const yargs = require('yargs');
// const { hideBin } = require('yargs/helpers');
const { program } = require('commander');
const contacts = require('./contacts');

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

// Commander
program
  .option('--action, <type>')
  .option('--id, <type>')
  .option('--name, <type>')
  .option('--email, <type>')
  .option('--phone, <type>');

// Yargs
// const arr = hideBin(process.argv);
// const { argv } = yargs(arr);
// invokeAction(argv);
