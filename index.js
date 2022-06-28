import express from 'express';
import { MongoClient } from "mongodb";
import { AmazonData } from './Routes/AmazonRoutes.js'
import cors from 'cors'

const app = express();
const PORT =5001
app.use(express.json())
app.use(cors())
const MONGO_URL= "mongodb+srv://abu123:abu123456@cluster0.vmj1f.mongodb.net"
async function createConnection(){
                         const client = new MongoClient(MONGO_URL);
                         await client.connect();
                        console.log("sucessfully connected");
                        return client;  
                    }
                    
 export const client = await createConnection();
 app.get("/", function (req, res) {
                         res.send("Hello World........");
                       });


app.use('/',AmazonData)

app.listen(PORT,()=>console.log('listening on port no.5001'))

