import express from "express";

import {
  createUser,
  getAllUsers,
  getUserInfoID,
} from "../controllers/user.controller";

const router = express.Router();
router.router("").get(getAllUsers);
router.router("").post(createUser);
router.router("/:id").get(getUserInfoID);

export default router;
