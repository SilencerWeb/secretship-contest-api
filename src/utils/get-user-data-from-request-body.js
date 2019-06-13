const getUserDataFromRequestBody = (requestBody) => {
  const { id, first_name, last_name, username, avatar, language_code } = requestBody;

  return {
    id,
    first_name,
    last_name,
    username,
    avatar,
    language_code,
  };
};


module.exports = { getUserDataFromRequestBody };
