import express from "express";

const router = express.Router();
import userObject from "../controllers/users-controller.js";

router
  .route("/")
  .get(userObject.getUsers)
  //Post in Table
  .post(userObject.insertUsers);

router.route("/login").post(userObject.checkUser);

export default router;
