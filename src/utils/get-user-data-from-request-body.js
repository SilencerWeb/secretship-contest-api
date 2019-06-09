const getUserDataFromRequestBody = (requestBody) => {
  const { id, first_name, last_name, username, avatarUrl } = requestBody;

  const userData = {};

  if (id) userData.id = id;
  if (first_name) userData.first_name = first_name;
  if (last_name) userData.last_name = last_name;
  if (username) userData.username = username;
  if (avatarUrl) userData.avatarUrl = avatarUrl;

  return userData;
};


module.exports = { getUserDataFromRequestBody };
