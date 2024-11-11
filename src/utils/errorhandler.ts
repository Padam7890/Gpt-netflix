import { FirebaseError } from "firebase/app";

export const errorHandler = (err: any) => {
  if (err instanceof FirebaseError) {
    const errorMessage = err?.message?.match(/\(([^)]+)\)/)?.[1];
    return errorMessage;
  } else {
    return err.message;
  }
};
