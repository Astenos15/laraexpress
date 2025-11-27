import BaseController from "../../Core/controller/BaseController.js";

export default class RegisteredUserController extends BaseController {
  index() {
    this.send("Index method");
  }
  show() {
    this.send("Show method");
  }
  create() {
    this.send("Create method");
  }
  store() {
    this.send("Store method");
  }
  update() {
    this.send("Update method");
  }
  destroy() {
    this.send("Destroy method");
  }
}
