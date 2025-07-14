import createHttpError from 'http-errors';
import {
  getAllContacts,
  getConctactById,
  createContact,
  cancelConctactById,
  updateContactById,
} from '../services/contact.js';

import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';

export const getAllContactsController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);
  const filter = parseFilterParams(req.query);

  const contacts = await getAllContacts({ page, perPage,sortBy, sortOrder, filter });

  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

export const getContactByIdController = async (req, res) => {
  const { contactId } = req.params;
  const contact = await getConctactById(contactId);

  if (!contact) {
    throw createHttpError(404, 'Contact not found');
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

export const deleteContactByIdController = async (req, res) => {
  const { contactId } = req.params;
  const contact = await cancelConctactById(contactId);

  if (!contact) {
    throw createHttpError(404, 'Contact not found');
  }
  res.json({
    status: 204,
    message: `Successfully deleted contact with id ${contactId}!`,
    data: contact,
  });
};

export const updateContactByIdController = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await updateContactById(contactId, req.body, {
    update: true,
  });

  if (!result) {
    next(createHttpError(404, 'Contact not found'));
    return;
  }

  const status = result.isNew ? 201 : 200;

  res.json({
    status,
    message: `Successfully updated contact with id ${contactId}!`,
    data: result.contact,
  });
};
