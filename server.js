import app from "./app.js"
import {webmigoDB} from './data/database.js'

webmigoDB();

app.listen(process.env.PORT,(req,res)=>{
    console.log("Server is working from server.js.");
})
