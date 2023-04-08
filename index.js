const contacts = require('./contacts');
// const argv = require('yargs').argv;

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

    case 'remove':
    // ... id
    //   break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

invokeAction({ action: 'read' });
invokeAction({ action: 'get', id: 'qdggE76Jtbfd9eWJHrssH' });
invokeAction({
  action: 'add',
  name: 'Vasyl Horaichuk',
  email: 'vg.createam@gmail.com',
  phone: '+38(063)301-71-65',
});
invokeAction({
  action: 'update',
  id: 'ij3-rhur',
  name: 'Volodumer Horaichuk',
  email: 'tets@gmail.com',
  phone: '+38(093)111-11-11',
});
// invokeAction(argv);
