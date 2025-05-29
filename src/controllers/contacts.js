import {getAllContacts, getConctactById} from "../services/contact.js";


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
        res.status(404).json({
            message: 'Contact does not exist',
        });
        return
    }
    res.json({
        status: 200,
        message: `Successfully found contact with id ${contactId}!`,
        data: contact,
    });
};


