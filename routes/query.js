import express from "express"
import { 
  
    getAllQuery,
    registerNewQuery,
 }
from "../controllers/query.js";

const router = express.Router();

router.use(express.json());

router.get("/allquery",getAllQuery)

router.post("/newquery",registerNewQuery)


export default router;