const { ForbiddenError } = require("../core/error.response");

const verifyRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.roles) throw new ForbiddenError("Forbidden resource");
    const roleArray = [...allowedRoles];
    console.log("roleArray", roleArray);
    console.log("req.roles", req.roles);
    const result = req.roles
      .map((role) => roleArray.includes(role))
      .find((val) => val === true);

    if (!result) {
      throw new ForbiddenError("Forbidden resource");
    }
    next();
  };
};

module.exports = verifyRoles;
