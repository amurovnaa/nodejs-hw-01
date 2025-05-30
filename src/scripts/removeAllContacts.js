import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('No contacts to delete');
      return;
    }

    await writeContacts([]);
    console.log('All contacts deleted');
  } catch (err) {
    console.error('Error while deleting contacts:', err);
  }
};

removeAllContacts();
