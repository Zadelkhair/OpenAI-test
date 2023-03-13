function success(data, message, statusCode) {
  return {
    status: "success",
    message: message || "OK",
    data: data,
    statusCode: statusCode || 200,
  };
}

function error(message, statusCode) {
  return {
    status: "error",
    message: message,
    statusCode: statusCode || 500,
  };
}

module.exports = {
  success: success,
  error: error,
};
