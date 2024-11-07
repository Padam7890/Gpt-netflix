interface checkValidate {
  email: string | undefined;
  password: string | undefined;
  username?: string | null | undefined;
}

export function checkvalidateInput(input: checkValidate) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;

  if (!input?.email?.match(emailRegex)) {
    return "Please enter a valid email address";
  }

  if (!input?.password?.match(passwordRegex)) {
    return "Please enter a valid password";
  }

  if (input?.username != null && !input.username.match(usernameRegex)) {
    return "Please enter a valid username";
  }

  return null;
}
