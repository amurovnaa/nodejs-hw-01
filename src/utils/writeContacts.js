import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    if (updatedContacts === undefined) {
      throw new Error('Undefined in writeContacts');
    }
    const data = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, data, 'utf8');
    console.log('Contact is written');
  } catch (err) {
    console.error('Error while writing contacts:', err);
  }
};
