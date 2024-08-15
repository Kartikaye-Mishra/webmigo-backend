import Mail from "../models/mail.js";

export const getAllMail = async(req,res)=>{
 
 
    const mail = await Mail.find({});

    res.json({
        success:true,
        mail:mail
    })
}


export const registerNewMail = async(req,res)=>{
    const {email} = await req.body;
   
     await Mail.create({
        
        
        email,
        

      })
   
       res.status(201).json({
           success:true,
          message: "We'll get in touch with you soon"
       })
       
   }