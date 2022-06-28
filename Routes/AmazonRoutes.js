import express from 'express';
import {getAmazonData,getFlipkartData} from '../Controller/getAmazonData.js'

const router= express.Router(); 

//router.get('/data',getAmazonData)

router.get("/data", async function (req, res) {
                         const {q}= req.query
                         const key=['name','price','image','rating']
                         
                         const data = await getAmazonData()
                         const search=(data)=>{
                         return data.filter((item)=>key.some((keys)=>item[keys].toLowerCase().includes(q))
                         )
                                                  }
                         console.log (search(data))
                         
                         
                         res.send(search(data).splice(0,10))
                       });
router.get("/flipkartdata" ,async function (req, res) {

                         const {q}= req.query
                         const key=['name','price','image','rating']
                         

                         const data = await getFlipkartData()
                         const search=(data)=>{
                          return data.filter((item)=>key.some((keys)=>item[keys].toLowerCase().includes(q))
                          )
                         }
                         res.send(search(data).splice(0,10));
})
export const AmazonData= router