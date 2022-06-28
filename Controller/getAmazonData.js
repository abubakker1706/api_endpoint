

import {client} from '../index.js'


export const getAmazonData= async(req, res) =>{
return await client.db("AmazonMobileData").collection("amazondatas").find({}).toArray();
}
export const getFlipkartData= async(req, res) =>{
 return await client.db("FlipkartWebdata").collection("flipkartdatas").find({}).limit(20).toArray();
                         }