import mongoose from "mongoose"

  const Schema = new mongoose.Schema({

    email:String,
   
  }) 

  const Mail = mongoose.model("Mail",Schema);

 export default Mail;