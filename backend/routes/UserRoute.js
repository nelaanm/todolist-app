import  express  from "express";
import {getUsers, getUserById, createUser, updateUser, deleteUser} from "../controllers/UserController.js"

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.patch('/users/:id', updateUserUser);
router.delete('/users/:id', deleteUserUser);


export default router;