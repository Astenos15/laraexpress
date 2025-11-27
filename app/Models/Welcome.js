import BaseModel from "../Core/model/BaseModel.js";

export default class Welcome extends BaseModel {
  constructor() {
    super("welcome");
    this.data = {
      heading: "LaraExpress",
      subheading: "laravel inspired mini MVC framework",
    };
  }

  async all() {
    return this.data;
  }

  static async all() {
    return await new this().all();
  }
}
