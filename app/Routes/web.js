import express from "express";
import controllerAction from "../Core/helpers/controllerAction.js";
import WelcomeController from "../Http/Controllers/WelcomeController.js";
import RegisteredUserController from "../Http/Controllers/RegisteredUserController.js";
const router = express.Router();

router.get("/", controllerAction(WelcomeController, "index"));

router.get("/register", controllerAction(RegisteredUserController, "index"));

export default router;
