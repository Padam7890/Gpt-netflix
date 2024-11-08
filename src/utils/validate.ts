interface checkValidate {
  email: string | undefined;
  password: string | undefined;
  username?: string | null | undefined;
}

export function checkvalidateInput(input: checkValidate) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;

  if (!input?.email?.match(emailRegex)) {
    return "Please enter a valid email address";
  }

  if (!input?.password) {
    return "Please enter a valid password";
  }

  if (input?.username != null && !input.username.match(usernameRegex)) {
    return "Please enter a valid username";
  }

  return null;
}
