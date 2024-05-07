import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import nodemon from "nodemon";


export const connectDB = async () => {
  try {

    const connectionInstant = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`\n MongoDB conncted and DB Host: ${connectionInstant.connection.host}`);


  } catch (error) {

    console.log("error hai bhai",error);
    process.exit(1)

  }
}