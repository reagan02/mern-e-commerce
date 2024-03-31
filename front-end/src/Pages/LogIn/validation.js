export const validateInput = (name, email, password) => {
  const errors = {};

  if (!name || name.length > 32) {
    errors.name =
      "Name is required and should be less than or equal to 32 characters.";
  }

  if (!email || email.length > 32) {
    errors.email =
      "Email is required and should be less than or equal to 32 characters.";
  }

  if (!password || password.length > 32 || password.length < 6) {
    errors.password =
      "Password is required and should be less than or equal to 32 characters.";
  }

  return errors;
};
