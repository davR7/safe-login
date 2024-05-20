import { isEmail } from "validator";

export const loginErrors = {
  email: {
    required: "Email is required",
    validate: (value: string) => {
      if (!isEmail(value)) {
        return "Email is invalid";
      }
      return true;
    },
  },
  password: {
    required: "Password is required",
    minLength: {
      value: 5,
      message: "Password must have at least 5 characters",
    },
  },
};
