import mongoose from 'mongoose';
import { env } from '../utils/env.js';

const db_connection_string = env('MONGO_DB_CONNECTION_STRING')

export const initMongoDBConnection = async () => {
    try {
        await mongoose.connect(db_connection_string)
        console.log("Mongo connection successfully established!")
    } catch (error) {
        console.log("error while connecting to Mongo db")
        console.log(error)
    }
}