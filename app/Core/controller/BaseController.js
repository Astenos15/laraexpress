import validator from "../helpers/validator.js";

export default class BaseController {
  constructor(req, res, next) {
    this.req = req;
    this.res = res;
    this.next = next;
  }

  async view(template, data = {}) {
    try {
      return this.res.render(template, data);
    } catch (error) {
      this.next(error);
    }
  }

  async send(data) {
    try {
      return this.res.send(data);
    } catch (error) {
      this.next(error);
    }
  }

  async json(data) {
    try {
      return this.res.json(data);
    } catch (error) {
      this.next(error);
    }
  }

  status(code) {
    this.res.status(code);
    return this;
  }

  redirect(url) {
    return this.res.redirect(url);
  }

  abort(code = 404, message = "Not Found") {
    return this.res.status(code).send(message);
  }

  dd(data) {
    return global.dd(this.res, data);
  }

  notFound(message, url) {
    return this.status(404).view("errors/error", {
      code: 404,
      title: "Not Found",
      message: `${message}`,
      backUrl: `${url}`,
      backMessage: "Go Back",
    });
  }

  async validate(rules, defaults = {}) {
    return await validator(this.req, rules, defaults);
  }
}
