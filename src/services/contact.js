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