import express from 'express';
import { MongoClient } from "mongodb";
import { AmazonData } from './Routes/AmazonRoutes.js'
import cors from 'cors'
import dotenv from 'dotenv'

 dotenv.config();
const app = express();

app.use(express.json())
app.use(cors())

async function createConnection(){
                         const client = new MongoClient(process.env.MONGO_URL);
                         await client.connect();
                        console.log("sucessfully connected");
                        return client;  
                    }
                    
 export const client = await createConnection();
 app.get("/", function (req, res) {
                         res.send("Hello World........");
                       });


app.use('/',AmazonData)

app.listen(process.env.PORT,()=>console.log('listening on port'))

