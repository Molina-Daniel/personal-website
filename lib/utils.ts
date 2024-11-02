export const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }
  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message = "Something went wrong";
  if (error instanceof Error) message = error.message;
  if (typeof error === "string") message = error;
  if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  }
  return message;
};
