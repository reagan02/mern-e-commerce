export const validateInput = (userName, email, password) => {
  const errors = {};

  if (!userName || userName.length > 32) {
    errors.userName =
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
