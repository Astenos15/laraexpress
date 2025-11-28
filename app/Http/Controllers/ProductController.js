import BaseController from "../../Core/controller/BaseController.js";
import Product from "../../Models/Product.js";

export default class ProductController extends BaseController {
  index() {
    this.view("products/index");
  }
  show() {
    this.send("Show method");
  }
  create() {
    this.view("products/create");
  }
  async store() {
    try {
      // Always validate
      const data = await this.validate({
        product_name: "required|min:3",
        product_price: "required|numeric",
      });

      // Your store logic
      await Product.create({
        product_name: data.product_name,
        product_price: data.product_price,
      });

      // Redirect user
      this.redirect("/products");
    } catch (error) {
      // return to form with old values and errors
      return this.view("products/create", {
        old: this.req.body,
        error: error.validation,
      });
    }
  }
  update() {
    this.send("Update method");
  }
  destroy() {
    this.send("Destroy method");
  }
}
