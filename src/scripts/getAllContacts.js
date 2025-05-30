import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    if (!contacts.length) {
      console.log('No contacts in db');
      return;
    }
    return contacts;
  } catch (err) {
    console.error(err);
    return [];
  }
};

console.log(await getAllContacts());
