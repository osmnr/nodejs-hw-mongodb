import createHttpError from "http-errors";
import {getAllContacts, getConctactById, createContact} from "../services/contact.js";


export const getAllContactsController = async (req, res) => {
    const contacts = await getAllContacts();

    res.json({
        status: 200,
        message: 'Successfully found contacts!',
        data: contacts,
    });
}


export const getContactByIdController = async (req, res) => {
    const {contactId} = req.params;
    const contact = await getConctactById(contactId);

    if (!contact){
        throw createHttpError(404, 'Contact not found')
    }
    res.json({
        status: 200,
        message: `Successfully found contact with id ${contactId}!`,
        data: contact,
    });
};


export const createContactController = async (req, res) => {
    const requestBody = req.body;
    const contact = await createContact(requestBody);

    res.status(201).json({
        status: 201,
        message: 'Successfully created a contact!',
        data: contact,
    });

};

