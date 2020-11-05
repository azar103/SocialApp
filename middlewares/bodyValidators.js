const { body, validationResult, check } = require("express-validator");
const postValidators = () => [
  body("description", "description field must be not empty").notEmpty(),
];
const signupValidators = () => [
  body("userName", "userName field must be not empty").notEmpty(),
  body("password", "password must contain a least 6 characters").isLength({
    min: 6,
    max: 20,
  }),
  check("password").exists(),
  check(
    "confirmPassword",
    "confirmPassword field must have the same value as the password field"
  )
    .exists()
    .custom((value, { req }) => value === req.body.password),

  body("email", "email is not valid").isEmail(),
];

const loginValidators = () => [
  body("password", "password field must be not empty").notEmpty(),
  body("email", "email field must be empty").notEmpty(),
];

const commentValidators = () => [
  body("comment", "comment is empty").notEmpty(),
];

const errorValidator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array().map((el) => ({
        msg: el.msg,
      })),
    });
  }
  next();
};

module.exports = {
  postValidators,
  signupValidators,
  loginValidators,
  errorValidator,
  commentValidators,
};
