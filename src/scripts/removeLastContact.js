import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('No contacts to delete');
      return;
    }

    const contactsWithoutLast = contacts.slice(0, contacts.length - 1);

    await writeContacts(contactsWithoutLast);
    console.log('The last contact deleted');
  } catch (err) {
    console.error('Error while deleting last contact:', err);
  }
};

removeLastContact();
