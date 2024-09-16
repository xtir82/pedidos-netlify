import { connect } from "mongoose";
import 'dotenv/config'; 

connect(process.env.MONGODB_URI, 
    { dbName: 'orders' })
    .then(() => console.log("Connected to DB"))
    .catch(() => console.log("Error to connect to DB"))