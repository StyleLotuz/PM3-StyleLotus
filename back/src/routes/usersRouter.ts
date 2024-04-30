import { Router } from "express";
import { getUserById, getUsers, loginUser, registerUser } from "../controllers/usersController";

const usersRouter = Router();

usersRouter.get("/", getUsers);

usersRouter.post("/register", registerUser);

usersRouter.post("/login", loginUser);

usersRouter.get("/:id", getUserById);

export default usersRouter;
