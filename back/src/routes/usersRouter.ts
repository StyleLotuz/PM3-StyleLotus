import { Router } from "express";
import { getUserById, getUsers, loginUser, registerUser } from "../controllers/usersController";
import { validateUserData } from "../middlewares/validateUserData";

const usersRouter = Router();

usersRouter.get("/", getUsers);

usersRouter.post("/register", validateUserData, registerUser);

usersRouter.post("/login", loginUser);

usersRouter.get("/:id", getUserById);

export default usersRouter;
