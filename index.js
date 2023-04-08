// const yargs = require('yargs');
// const { hideBin } = require('yargs/helpers');
const { program } = require('commander');
const contacts = require('./contacts');

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'read':
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);

    case 'get':
      const getContacts = await contacts.getContactById(id);
      return console.table(getContacts);

    case 'add':
      const newContacts = await contacts.addContact(name, email, phone);
      return console.table(newContacts);

    case 'update':
      const updateContacts = await contacts.updateContactById(id, {
        name,
        email,
        phone,
      });
      return console.table(updateContacts);

    case 'remove':
      const removeContacts = await contacts.removeContactById(id);
      return console.table(removeContacts);

    default:
      return console.log('Unknown action type!');
  }
};

// Commander
program
  .option('-a, --action, <type>')
  .option('-i, --id, <type>')
  .option('-n, --name, <type>')
  .option('-e, --email, <type>')
  .option('-p, --phone, <type>');

program.parse();
const options = program.opts();
invokeAction(options);

// Yargs
// const arr = hideBin(process.argv);
// const { argv } = yargs(arr);
// invokeAction(argv);
