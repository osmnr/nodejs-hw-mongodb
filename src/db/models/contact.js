import { Schema, model } from 'mongoose';

const contactSchema = new Schema(
  {

       name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: false
    },
    isFavourite: {
      type: Boolean,
      default: 'false'
    },
    contactType: {
      type: String,
      required: true,
      enum: ['work', 'home', 'personal'],
      default: 'personal'
    },


    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ['male', 'female', 'other'],
    },
    avgMark: {
      type: Number,
      required: true,
    },
    onDuty: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);


export const ContactCollection = model('contact', contactSchema)
