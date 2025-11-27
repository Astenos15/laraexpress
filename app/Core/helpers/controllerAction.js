export default function controllerAction(Controller, methodName) {
  return async (req, res, next) => {
    try {
      const controller = new Controller(req, res, next);
      if (typeof controller[methodName] !== "function") {
        throw new Error(
          `Method ${methodName} is not found inside ${Controller.name}`
        );
      }
      await controller[methodName](req, res, next);
    } catch (error) {
      next(error);
    }
  };
}
