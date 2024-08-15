import mongoose from "mongoose"

  const Schema = new mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    message:String
  }) 

  const Query = mongoose.model("Query",Schema);

 export default Query;