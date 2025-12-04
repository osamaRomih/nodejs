export const successResponse = (res, message, status, data) => {
  res.status(status).json({
    status,
    message,
    succes: true,
    data,
  });
};

export const errorResponse = (res, message, status, error) => {
  res.status(status).json({
    status,
    message,
    succes: false,
    error,
  });
};
