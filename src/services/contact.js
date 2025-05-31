import {ContactCollection} from '../db/models/contact.js';

export const getAllContacts = async () => {
    try {
        const contacts = await ContactCollection.find()
        return contacts
    } catch (e) {
        console.log(e)        
    }
}

export const getConctactById = async (contactId) => {
    try {
        const contact_instance = await ContactCollection.findById(contactId)
        return contact_instance
    } catch (e) {
        console.log(e)
    }
}

export const createContact = async (payload) => {
    const contact = await ContactCollection.create(payload);
    return contact;

}

export const cancelConctactById = async (contactId) => {
    const contact_instance = await ContactCollection.findOneAndDelete({
        _id:contactId
    });
    return contact_instance;
    }


export const updateContactById = async (contactId, payload, options={}) => {
    const rawResult = await ContactCollection.findOneAndUpdate({
        _id:contactId },
        payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    });

    if (!rawResult || !rawResult.value) {
        return null
    }
    return {
    student: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};