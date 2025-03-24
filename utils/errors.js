export const createError = (errMsg, status) => {
    const err = new Error(errMsg);
    err.status = status || 500;
    return err;
  };
  