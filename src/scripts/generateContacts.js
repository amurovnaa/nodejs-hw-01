import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (count) => {
  try {
    const existingContacts = await readContacts();

    const newContacts = [];
    for (let i = 0; i < count; i++) {
      const fakeContact = createFakeContact();
      newContacts.push(fakeContact);
    }
    existingContacts.push(...newContacts);

    await writeContacts(existingContacts);

    console.log(`${count} contacts generated.`);
  } catch (err) {
    console.error('Error while generating contacts', err);
  }
};

generateContacts(5);
