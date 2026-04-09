function isImageCommand(response) {
  const isImageUrl = (res) =>
    typeof res === "string" &&
    (res.trim().startsWith("http") || res.trim().startsWith("||http"));

  if (Array.isArray(response)) {
    return response.some((res) => isImageUrl(res));
  }
  return isImageUrl(response);
}

module.exports = { isImageCommand };
