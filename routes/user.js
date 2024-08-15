import express from "express"
import { 
    deleteUserById,
    getAllUsers,
    getUserById,
    registerNewUser,
    specialFunc, 
    updateUserById}
from "../controllers/user.js";

const router = express.Router();

router.use(express.json());

router.get("/all",getAllUsers)

router.get("/userid/special",specialFunc)

router.post("/new",registerNewUser)

// router.get("/userid/:id",getUserById)
// router.put("/userid/:id",updateUserById)
// router.get("/userid/:id",deleteUserById)

// when url is same and methods are different like get,put,etc, this can be used

router.route("/userid/:id")
.get(getUserById)
.put(updateUserById)
.delete(deleteUserById)




export default router;