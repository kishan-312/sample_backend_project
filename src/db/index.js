import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


async function connectDB() {

    try {

      const connectionInstances =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
      console.log(`\n mongodb connected : ${connectionInstances.connection.host}`);
      

    }

    catch(error) {

        console.error(error, "mongodb connection error");
        process.exit(1)

    }


}

export default connectDB
