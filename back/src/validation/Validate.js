import Joi from "joi";

const validateForm = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false });

const signupSchema = Joi.object({
  fullname: Joi.string().min(4).required(),
  email: Joi.string().email({ tlds: { allow: false } }),
  password: Joi.string().required(),
});

const validateSignup = validateForm(signupSchema);

export const signupValidation = (req, res, next) => {
  const { error } = validateSignup(req.body);
  if (error) {
    res.status(400).json({ message: error });
  } else {
    next();
  }
};

const loginSchema = Joi.object({
  email: Joi.string().email().trim().required(),
  password: Joi.string().min(6),
});

const validateLogin = validateForm(loginSchema);

export const loginValidation = (req, res, next) => {
  const { error } = validateLogin(req.body);
  if (error) {
    res.status(400).json({ message: error });
  } else {
    next();
  }
};
