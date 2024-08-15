import express from "express"
import queryRouter from "./routes/query.js";
import mailRouter from "./routes/mail.js";
import {config} from "dotenv"
import cors from "cors"

const app = express();

config({
  path:"./data/config.env"
})
app.use(cors());



  app.use("/query",queryRouter);
  app.use("/mail",mailRouter);

app.get("/",(req,res)=>{
    res.send("Nice")
})

export default app;


