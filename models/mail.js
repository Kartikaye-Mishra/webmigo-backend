import mongoose from "mongoose"

  const Schema = new mongoose.Schema({

    email:String,
   
  },
  { timestamps: true }
) 

  const Mail = mongoose.model("Mail",Schema);

 export default Mail;