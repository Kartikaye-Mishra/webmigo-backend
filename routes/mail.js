import express from "express"
import { 
  
    getAllMail,
    registerNewMail,
 }
from "../controllers/mail.js";

const router = express.Router();

router.use(express.json());

router.get("/allmail",getAllMail)

router.post("/newmail",registerNewMail)


export default router;