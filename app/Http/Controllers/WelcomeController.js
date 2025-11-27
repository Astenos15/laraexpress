import BaseController from "../../Core/controller/BaseController.js";
import Welcome from "../../Models/Welcome.js";

export default class WelcomeController extends BaseController {
  async index() {
    const data = await Welcome.all();
    this.view("welcome", { data });
  }
}
