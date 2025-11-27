export default class BaseController {
  constructor(req, res, next) {
    this.req = req;
    this.res = res;
    this.next = next;
  }
  async view(template, data = {}) {
    try {
      await this.res.render(template, { ...data });
    } catch (error) {
      this.next(error);
    }
  }
}
