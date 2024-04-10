import { Router } from "express";
import {
  createUsers,
  deleteUser,
  editUser,
  renderUsers,
  updateUser,
} from "../controllers/userController.js";
const router = Router();

router.get("/", renderUsers);
router.post("/add", createUsers);
router.get("/update/:id", editUser);
router.post("/update/:id", updateUser);
router.get("/delete/:id", deleteUser);

export default router;
