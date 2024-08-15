import Query from "../models/query.js";

export const getAllQuery = async(req,res)=>{
 
 
    const query = await Query.find({});

    res.json({
        success:true,
        query:query
    })
}


export const registerNewQuery = async(req,res)=>{
    const {lname,fname,email,desc} = await req.body;
   
     await Query.create({
        fname,
        lname,
        email,
        message:desc,
      })
   
       res.status(201).json({
           success:true,
          message: "Query Sent Successfully"
       })
       
   }