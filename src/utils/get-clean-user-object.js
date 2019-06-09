// Generating new object without mongoose data such as _id and __v
const getCleanUserObject = (user) => {
  const { id, first_name, last_name, username, avatarUrl, created } = user;

  return {
    id,
    first_name,
    last_name,
    username,
    avatarUrl,
    created,
  };
};


module.exports = { getCleanUserObject };
